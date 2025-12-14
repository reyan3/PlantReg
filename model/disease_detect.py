from fastapi import FastAPI, UploadFile, File
from transformers import pipeline
from PIL import Image
import io
from fastapi.middleware.cors import CORSMiddleware
from model.disease_info import disease_info   # your big dictionary
import difflib

app = FastAPI()

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model only once
classifier = pipeline(
    "image-classification",
    model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification",
    device=-1
)


# 🔥 SMART FUZZY MATCHING FUNCTION (works 100%)
def match_label(label: str, disease_dict: dict):
    label = label.lower().replace("_", " ").strip()
    keys = list(disease_dict.keys())
    match = difflib.get_close_matches(label, keys, n=1, cutoff=0.3)
    if match:
        return match[0]
    return None


@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")

    # Model prediction
    predictions = classifier(image)
    result = predictions[0]

    raw_label = result["label"]                   # Model output
    confidence = round(result["score"] * 100, 2)  # Convert to %

    # 🔥 Auto-match label (handles all variations)
    matched_key = match_label(raw_label, disease_info)

    # If matched, get details
    if matched_key:
        extra_info = disease_info[matched_key]
    else:
        extra_info = {
            "description": "No data available",
            "symptoms": "No data available",
            "prevention": "No data available",
            "treatment": "No data available",
            "fertilizer": "No data available",
            "soil": "No data available",
        }

    # Return JSON response
    return {
        "prediction": raw_label,
        "confidence": f"{confidence}%",
        **extra_info
    }

#  uvicorn model.disease_detect:app --reload -> To Run in terminal
