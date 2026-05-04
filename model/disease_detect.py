from fastapi import FastAPI, UploadFile, File
# Change: Use AutoImageProcessor instead of DefaultImageProcessor
from transformers import AutoModelForImageClassification, AutoImageProcessor, pipeline
from PIL import Image
import io
from fastapi.middleware.cors import CORSMiddleware
from model.disease_info import disease_info
import difflib

app = FastAPI()

# -------------------- CORS --------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # OK for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# We use the processor from the official Google repo because it's complete
MODEL_ID = "linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification"
PROCESSOR_ID = "google/mobilenet_v2_1.0_224"

print("Loading model and processor...")

# This pulls the correct image processing logic (224x224, normalization, etc.)
processor = AutoImageProcessor.from_pretrained(PROCESSOR_ID)
model = AutoModelForImageClassification.from_pretrained(MODEL_ID)

# -------------------- LOAD MODEL ONCE --------------------

classifier = pipeline(
    "image-classification",
    model=model,
    image_processor=processor, # Inject the working processor here
    device=-1
)
print("Model loaded successfully!")

# -------------------- HEALTH CHECK (FOR UPTIMEROBOT) --------------------
@app.get("/")
def root():
    return {"status": "PlantReg backend is running"}

@app.get("/health")
def health():
    return {"status": "ok"}




# -------------------- SMART FUZZY MATCH --------------------
def match_label(label: str, disease_dict: dict):
    label = label.lower().replace("_", " ").strip()
    keys = list(disease_dict.keys())
    match = difflib.get_close_matches(label, keys, n=1, cutoff=0.3)
    return match[0] if match else None

# -------------------- PREDICTION API --------------------
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")

    predictions = classifier(image)
    result = predictions[0]

    raw_label = result["label"]
    confidence = round(result["score"] * 100, 2)

    matched_key = match_label(raw_label, disease_info)

    extra_info = disease_info.get(matched_key, {
        "description": "No data available",
        "symptoms": "No data available",
        "prevention": "No data available",
        "treatment": "No data available",
        "fertilizer": "No data available",
        "soil": "No data available",
    })

    return {
        "prediction": raw_label,
        "confidence": f"{confidence}%",
        **extra_info
    }

# Run locally:
# uvicorn model.disease_detect:app --reload
