# RecipeSnap - AI Cooking Assistant from Your Fridge 🍳📸

Turn your fridge ingredients into delicious recipes with the power of AI! RecipeSnap uses computer vision to identify ingredients from photos and generates personalized recipe recommendations.

## 🌟 Features

- **Smart Ingredient Detection**: Upload photos and let AI identify available ingredients
- **AI-Powered Recipe Generation**: Get personalized recipe suggestions
- **User Authentication**: Secure email/password authentication
- **Recipe Management**: Save favorites, rate recipes, and track cooking history
- **Ingredient Inventory**: Keep track of your pantry and expiration dates

## 🤖 AI Models Used

- **nlpconnect/vit-gpt2-image-captioning**: Vision Transformer for ingredient identification
- **facebook/detr-resnet-50**: Object detection for precise ingredient recognition
- **mistralai/Mistral-7B-Instruct**: Recipe generation and recommendations

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Python (AI models)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI/ML**: Hugging Face Transformers
- **Deployment**: Vercel, Railway/Render

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/recipesnap.git
cd recipesnap
npm install
cd ai-service && pip install -r requirements.txt
```

### 2. Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
HUGGINGFACE_API_KEY=your_hf_key
```

### 3. Supabase Setup
1. Create new Supabase project
2. Run database schema from `/database/schema.sql`
3. Enable Email/Password authentication
4. Create storage bucket: `recipe-images`

### 4. AI Models Setup

**Option A: Local Setup**
```bash
cd ai-service
python setup_models.py  # Download models
python app.py           # Start AI service
```

**Option B: Hugging Face API**
```env
USE_HF_INFERENCE=true
HUGGINGFACE_API_KEY=your_key
```

### 5. Start Development
```bash
npm run dev  # Frontend on :3000
```

## 📁 Project Structure

```
recipesnap/
├── components/          # React components
├── pages/              # Next.js pages & API routes
├── lib/                # Utilities & Supabase client
├── ai-service/         # Python AI models
├── database/           # Database schemas
└── styles/             # Global styles
```

## 🔧 Key Configuration

### AI Service (Python Flask)
```python
# ai-service/app.py
from transformers import pipeline

# Load models
captioning = pipeline("image-to-text", model="nlpconnect/vit-gpt2-image-captioning")
detection = pipeline("object-detection", model="facebook/detr-resnet-50")
text_gen = pipeline("text-generation", model="mistralai/Mistral-7B-Instruct")
```

### Supabase Database Tables
- `profiles` - User profiles
- `uploaded_images` - Image storage references
- `detected_ingredients` - AI detection results
- `recipes` - Recipe data
- `user_favorites` - User saved recipes

## 🧪 Testing

```bash
# Frontend tests
npm test

# AI service tests
cd ai-service && python -m pytest

# Test ingredient detection
curl -X POST localhost:5000/detect-ingredients -F "image=@test.jpg"
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repo to Vercel
2. Set environment variables
3. Deploy automatically

### AI Service (Railway)
```bash
railway login
railway init
railway up
```

### Database
- Supabase handles production database automatically
- Enable backups in dashboard

## 📊 Performance Tips

- **Model Caching**: Cache AI model results
- **Image Optimization**: Compress uploads
- **Database Indexing**: Index frequently queried columns
- **CDN**: Use Supabase CDN for images

## 🔒 Security Features

- Row Level Security (RLS) on all tables
- JWT token authentication
- Input validation and sanitization
- Secure file upload with type validation

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Submit pull request



---

Built with ❤️ using AI-powered ingredient detection and recipe generation
