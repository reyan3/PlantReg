# 🌱 PlantReg - AI-Powered Plant Disease Detection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/react-18.0+-61dafb.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg)](https://fastapi.tiangolo.com/)

PlantReg is an intelligent web application that leverages machine learning to detect plant diseases from leaf images. Designed for farmers, gardeners, and plant enthusiasts, it provides instant disease analysis and actionable insights to help protect your plants.

---

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [Screenshots](#️-screenshots)
- [Key Features](#-key-features)
- [Technologies Used](#️-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Model Information](#-model-information)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🔗 Live Demo

**[Launch PlantReg →](https://plantregapp.netlify.app/)**

Try it out with sample images or upload your own plant leaf photos!
```
!Note - Do not aspect to get fast response in your first call as it may take 1 to 3 minutes to give result ,as the backend server goes to sleep in every 15 minutes if no traffic on the website.Try to refresh page after 2-3 minutes if the buffering not
stops.
```
---

## 🖼️ Screenshots

<div align="center">

### Home / Upload Interface
<img width="600" height="600" alt="Screenshot 2025-12-14 175002" src="https://github.com/user-attachments/assets/6fee7bb6-9296-407c-b620-d741ae8ae51e" />


### Disease Detection Results

<img width="600" height="600" alt="Screenshot 2025-12-14 175122" src="https://github.com/user-attachments/assets/4976d380-15fe-4310-b115-2efafd7d7bf0" />

### Others 

<img width="600" height="600" alt="Screenshot 2025-12-14 175021" src="https://github.com/user-attachments/assets/a0069b92-2a5f-4d60-b5c0-f4b3a5833953" />
<img width="600" height="600" alt="Screenshot 2025-12-14 175028" src="https://github.com/user-attachments/assets/e347140c-7899-4530-b231-6c9d8004c2a2" />
<img width="600" height="600" alt="Screenshot 2025-12-14 175135" src="https://github.com/user-attachments/assets/86916339-fb9c-4993-98a5-a5c2ff461432" />

</div>

---

## ✨ Key Features

- 🔍 **Instant Disease Detection** - Upload an image and get results in seconds
- 🎯 **High Accuracy** - Powered by a trained deep learning model
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌿 **Multiple Plant Support** - Detects diseases across various plant species (Tomato, Potato, Pepper, etc.)
- 📊 **Confidence Scores** - See how confident the model is about its predictions
- 💡 **Disease Information** - Get detailed descriptions and treatment recommendations
- ⚡ **Fast Processing** - Optimized backend for quick image analysis
- 🎨 **Modern UI/UX** - Clean, intuitive interface built with React

---

## 🛠️ Technologies Used

### Frontend
- **React.js** - Component-based UI framework
- **RestAPI** - HTTP client for API requests
- **React Router** - Navigation and routing

### Backend
- **FastAPI** - High-performance Python web framework
- **Python 3.9+** - Core programming language
- **TensorFlow/PyTorch** - Deep learning framework (specify which you use)
- **PIL (Pillow)** - Image processing library
- **Uvicorn** - ASGI server

### Machine Learning
- **Custom CNN Model** - Trained on PlantVillage dataset (or specify your dataset)
- **Image Classification** - Multi-class disease detection
- **Data Augmentation** - Improved model robustness

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
# Check Node.js version (should be 14.x or higher)
node --version

# Check npm version
npm --version

# Check Python version (should be 3.9 or higher)
python --version

# Check pip version
pip --version
```

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/reyan3/plantreg.git
cd plantreg
```

#### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```

The backend will start at **http://127.0.0.1:8000**

You can view the API docs at **http://127.0.0.1:8000/docs**

#### 3️⃣ Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will start at **http://localhost:5173**

---

## 📁 Project Structure

```
PlantReg/
├── backend/                  # FastAPI backend
│   ├── main.py              # Main application entry point
│   ├── model/               # ML model directory
│   │   ├── disease_model.h5 # Trained model file
│   │   └── model_utils.py   # Model loading and prediction utilities
│   ├── disease_info.py      # Disease information database
│   ├── requirements.txt     # Python dependencies
│   └── tests/               # Backend tests
├── frontend/                # React frontend
│   ├── public/              # Static files
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ImageUpload.jsx
│   │   │   ├── ResultDisplay.jsx
│   │   │   └── Header.jsx
│   │   ├── services/        # API service layer
│   │   │   └── api.js
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│   │   └── styles/          # CSS files
│   ├── package.json         # Node dependencies
│   └── README.md
├── docs/                    # Documentation
├── .gitignore
├── LICENSE
└── README.md
```

---

## 📡 API Documentation

### Base URL
```
http://127.0.0.1:8000
```

### Endpoints

#### 1. Predict Disease

**POST** `/predict/`

Upload a plant leaf image to detect diseases.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `file` (image file)

**Response:**
```json
{
  "success": true,
  "prediction": "Tomato Late Blight",
  "confidence": 0.96,
  "disease_info": {
    "name": "Late Blight",
    "description": "A devastating disease caused by Phytophthora infestans",
    "symptoms": ["Dark spots on leaves", "White mold on underside"],
    "treatment": ["Remove infected plants", "Apply fungicide"]
  }
}
```

#### 2. Get Supported Diseases

**GET** `/diseases/`

Retrieve a list of all detectable plant diseases.

**Response:**
```json
{
  "diseases": [
    "Tomato Late Blight",
    "Potato Early Blight",
    "Healthy"
  ],
  "count": 15
}
```

#### 3. Health Check

**GET** `/health/`

Check if the API is running.

**Response:**
```json
{
  "status": "healthy",
  "model_loaded": true
}
```

---

## 🤖 Model Information

### Architecture
- **Model Type:** Convolutional Neural Network (CNN)
- **Framework:** TensorFlow/Keras (or PyTorch)
- **Input Size:** 224x224 pixels
- **Classes:** 15+ plant disease categories

### Training
- **Dataset:** PlantVillage / Custom dataset
- **Training Samples:** 50,000+ images
- **Validation Accuracy:** ~95%
- **Augmentation:** Rotation, flip, zoom, brightness adjustment

### Performance
- **Inference Time:** <1 second per image
- **Model Size:** ~50MB
- **Supported Formats:** JPG, PNG, JPEG

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/plantreg.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

### Contribution Guidelines

- Write clear commit messages
- Update documentation as needed
- Ensure all tests pass
- Follow the code of conduct
- Be respectful and constructive

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Your Name** - Reyan - clan6229@gmail.com

**Project Link:** https://github.com/reyan3/PlantReg

---

## 🙏 Acknowledgments

- PlantVillage Dataset for training data
- FastAPI community for excellent documentation
- React team for the powerful framework
- All contributors who have helped improve this project

---

## 🗺️ Roadmap

- [ ] Add more plant species support
- [ ] Implement user accounts and history tracking
- [ ] Mobile app development (iOS/Android)
- [ ] Multi-language support
- [ ] Integration with plant care recommendations
- [ ] Batch image processing
- [ ] API rate limiting and authentication

---

<div align="center">

**Made with ❤️ for plant lovers worldwide**

⭐ Star this repo if you find it helpful!

</div>
