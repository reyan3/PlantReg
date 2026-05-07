# 🌱 PlantReg - AI-Powered Plant Disease Detection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/react-18.0+-61dafb.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg)](https://fastapi.tiangolo.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)

PlantReg is an intelligent web application that leverages machine learning to detect plant diseases from leaf images. Designed for farmers, gardeners, and plant enthusiasts, it provides instant disease analysis and actionable insights to help protect your plants. Now with user authentication and personalized experience!

---

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [What's New](#-whats-new)
- [Screenshots](#️-screenshots)
- [Key Features](#-key-features)
- [Technologies Used](#️-technologies-used)
- [Getting Started](#-getting-started)
- [Firebase Setup](#-firebase-setup)
- [Project Structure](#-project-structure-example)
- [API Documentation](#-api-documentation)
- [Model Information](#-model-information)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🔗 Live Demo

**[Launch PlantReg →](https://plantregnew.netlify.app/)**

Try it out with sample images or upload your own plant leaf photos!

---

## 🆕 What's New

### Version 2.0 Updates

#### 🔐 Firebase Integration
- **User Authentication** - Secure sign-up and login system powered by Firebase
- **Google OAuth** - One-click sign-in with your Google account
- **User Profiles** - Personalized experience with user data persistence
- **Session Management** - Stay logged in across sessions with secure token handling

#### 🎨 Enhanced UI/UX
- **Profile Icon** - User avatar/profile icon displayed in the navbar
- **Authentication Flow** - Seamless login/signup interface with smooth transitions
- **Responsive Auth UI** - Mobile-friendly authentication dialogs

#### 🐛 Bug Fixes & Improvements
- Fixed image upload handling for authenticated users
- Improved error handling across API calls
- Enhanced mobile responsiveness on authentication screens
- Optimized Firebase connection pooling
- Fixed state management issues with user sessions
- Improved loading states and user feedback

---

## 🖼️ Screenshots

<div align="center">

### Home / Upload Interface
<img width="600" height="300" alt="Screenshot 2025-12-14 175002" src="https://github.com/user-attachments/assets/6fee7bb6-9296-407c-b620-d741ae8ae51e" />

### Disease Detection Results
<img width="600" height="300" alt="Screenshot 2025-12-14 175122" src="https://github.com/user-attachments/assets/4976d380-15fe-4310-b115-2efafd7d7bf0" />

### Disease Library and Contact
<img width="600" height="300" alt="Screenshot 2025-12-14 175021" src="https://github.com/user-attachments/assets/a0069b92-2a5f-4d60-b5c0-f4b3a5833953" />
<img width="600" height="300" alt="Screenshot 2025-12-14 175028" src="https://github.com/user-attachments/assets/e347140c-7899-4530-b231-6c9d8004c2a2" />
<img width="600" height="300" alt="Screenshot 2025-12-14 175135" src="https://github.com/user-attachments/assets/86916339-fb9c-4993-98a5-a5c2ff461432" />

</div>

---

## ✨ Key Features

### 🔍 Core Features
- 🔍 **Instant Disease Detection** - Upload an image and get results in seconds
- 🎯 **High Accuracy** - Powered by a trained deep learning model
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌿 **Multiple Plant Support** - Detects diseases across various plant species (Tomato, Potato, Pepper, etc.)
- 📊 **Confidence Scores** - See how confident the model is about its predictions
- 💡 **Disease Information** - Get detailed descriptions and treatment recommendations
- ⚡ **Fast Processing** - Optimized backend for quick image analysis
- 🎨 **Modern UI/UX** - Clean, intuitive interface built with React

### 🔐 Authentication & User Management
- 👤 **User Accounts** - Create and manage your personal account
- 🔑 **Google Sign-In** - Quick authentication with Google OAuth 2.0
- 🔒 **Secure Authentication** - Firebase-powered security
- 📸 **Profile Management** - View and update your profile information
- 🏷️ **User Icon Display** - Profile picture/avatar shown in navbar
- 💾 **Detection History** - Save and track your past plant analyses (Coming Soon)

---

## 🛠️ Technologies Used

### Frontend
- **React.js** - Component-based UI framework
- **React Router** - Navigation and routing
- **Firebase SDK** - Authentication and user management
- **Axios** - HTTP client for API requests
- **CSS3** - Modern styling and animations

### Backend
- **FastAPI** - High-performance Python web framework
- **Python 3.9+** - Core programming language
- **TensorFlow/PyTorch** - Deep learning framework
- **PIL (Pillow)** - Image processing library
- **Uvicorn** - ASGI server

### Authentication & Database
- **Firebase Authentication** - User authentication service
- **Firebase Firestore** - NoSQL cloud database (optional)
- **Google OAuth 2.0** - Third-party authentication

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
git clone https://github.com/reyan3/PlantReg.git
cd PlantReg
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
npm run dev
```

The frontend will start at **http://localhost:5173**

---

## 🔥 Firebase Setup

To enable authentication features, you need to set up Firebase:

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" and follow the setup wizard
3. Enter your project name (e.g., "PlantReg")
4. Enable Google Analytics (optional)
5. Click "Create Project"

### Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication** → **Sign-in method**
2. Enable **Email/Password** authentication
3. Enable **Google** authentication
   - Add your support email
   - Configure OAuth consent screen if prompted

### Step 3: Register Your Web App

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down and click **Add app** → Select **Web** (</> icon)
3. Register your app with a nickname (e.g., "PlantReg Web")
4. Copy the Firebase configuration object

### Step 4: Configure Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Step 5: Update Firebase Config

In your frontend code (e.g., `src/firebase/config.js`), use the environment variables:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

### Step 6: Test Authentication

1. Restart your development server
2. Try signing up with email/password
3. Try signing in with Google
4. Verify your profile icon appears in the navbar

---

```
## ⚙️ How It Works

PlantReg uses a deep learning model combined with a modern full-stack web application to detect plant diseases from uploaded leaf images.

### 1️⃣ User Authentication
Users can:
- Create an account using email/password
- Sign in with Google OAuth
- Maintain secure sessions using Firebase Authentication

Authentication enables a personalized experience and future support for detection history tracking.

---

### 2️⃣ Upload Plant Leaf Image
Users upload a plant leaf image through the React frontend.

Supported features:
- Drag & drop image upload
- Mobile-friendly image selection
- Instant preview before analysis

The frontend sends the image securely to the FastAPI backend.

---

### 3️⃣ Backend Image Processing
The FastAPI server:
- Receives the uploaded image
- Preprocesses and resizes it
- Converts it into a format suitable for the ML model

Image preprocessing helps improve prediction consistency and accuracy.

---

### 4️⃣ AI Disease Detection
The trained deep learning model analyzes the image and predicts:
- Plant species
- Disease type (if infected)
- Confidence score

The model was trained using the PlantVillage dataset with thousands of plant leaf images.

Example prediction:
{
  "prediction": "Tomato Late Blight",
  "confidence": 0.96
}

### 5️⃣ Disease Information & Recommendations
After prediction, PlantReg displays:
- Disease name
- Symptoms
- Description
- Suggested treatments and prevention tips

This helps users quickly understand the condition affecting their plants.

---

### 6️⃣ Response Display
The React frontend displays:
- Uploaded image preview
- Predicted disease
- Confidence percentage
- Disease details
- Treatment suggestions

The interface is fully responsive and optimized for desktop and mobile devices.

---

### 7️⃣ Firebase-Powered User Experience
Firebase handles:
- Secure authentication
- Session persistence
- User profile management
- Google sign-in integration

Future updates will also include:
- Cloud-based detection history
- Saved analyses
- Personalized dashboards

## 🔄 Workflow Overview
User Uploads Plant Leaf Image
              ↓
React Frontend Sends Image
              ↓
FastAPI Backend Receives Image
              ↓
Image Preprocessing
              ↓
Deep Learning Model Prediction
              ↓
Disease + Confidence Score Generated
              ↓
Disease Information Retrieved
              ↓
Results Displayed to User

```
## 📁 Project Structure (example)

```
PlantReg/
├── backend/                  # FastAPI backend
│   ├── main.py              # Main application entry point
│   ├── model/               # ML model directory
│   │   ├── disease_model.h5 # Trained model file
│   │   └── model_utils.py   # Model loading and prediction utilities
│   ├── disease_info.py      # Disease information database
│   ├── requirements.txt     # Python dependencies
├── frontend/                # React frontend
│   ├── public/              # Static files
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ImageUpload.jsx
│   │   │   ├── ResultDisplay.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── ProfileIcon.jsx
│   │   ├── firebase/        # Firebase configuration
│   │   │   ├── config.js    # Firebase initialization
│   │   │   └── auth.js      # Authentication helpers
│   │   ├── context/         # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── services/        # API service layer
│   │   │   └── api.js
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│   │   └── styles/          # CSS files
│   ├── .env                 # Environment variables (not in git)
│   ├── .env.example         # Example env file
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
- Headers: `Authorization: Bearer <firebase_token>` (optional, for logged-in users)

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

### Training
- **Dataset:** PlantVillage Dataset
- **Training Samples:** 50,000+ images
- **Validation Accuracy:** ~95%

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/reyan3/PlantReg.git
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

**Reyan** - clan6229@gmail.com

**Project Link:** https://github.com/reyan3/PlantReg

---

## 🙏 Acknowledgments

- Firebase team for authentication infrastructure
- FastAPI community for excellent documentation
- React team for the powerful framework
- Google OAuth for seamless authentication
- All contributors who have helped improve this project

---

## 🗺️ Roadmap

### Completed ✅
- [x] Firebase integration
- [x] Google OAuth authentication
- [x] User profile management
- [x] Profile icon in navbar
- [x] Bug fixes and stability improvements

### In Progress 🚧
- [ ] User detection history tracking
- [ ] Firestore database integration
- [ ] Email verification flow

### Planned 📋
- [ ] Add more plant species support
- [ ] Mobile app development (iOS/Android)
- [ ] Multi-language support
- [ ] Integration with plant care recommendations
- [ ] Batch image processing
- [ ] Advanced user analytics dashboard
- [ ] Social features (share detections)

---

## 🔒 Security

### Authentication Security
- Firebase Authentication provides industry-standard security
- All passwords are hashed and never stored in plain text
- OAuth tokens are securely managed
- HTTPS required for production deployment

### Best Practices
- Never commit `.env` files to version control
- Rotate API keys regularly
- Use environment variables for all sensitive data
- Enable Firebase security rules for production

---

## 🐛 Known Issues

Currently, there are no known critical issues. If you encounter any problems:

1. Check the [Issues](https://github.com/reyan3/PlantReg/issues) page
2. Search for existing reports
3. Create a new issue if needed with:
   - Detailed description
   - Steps to reproduce
   - Screenshots (if applicable)
   - Your environment details

---

<div align="center">

⭐ Star this repo if you find it helpful!

### Connect With Us

[![GitHub](https://img.shields.io/badge/GitHub-reyan3-181717?logo=github)](https://github.com/reyan3)

</div>
