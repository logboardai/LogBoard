# Logboard API Backend

A FastAPI-based backend service for website content analysis and image extraction.

## Project Structure

```
launchpad-backend/
├── main.py                 # FastAPI application entry point
├── app/
│   ├── __init__.py
│   ├── api/                # API layer
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── api.py      # Main API router
│   │       └── endpoints/
│   │           └── __init__.py
│   ├── core/              # Core configuration
│   │   ├── __init__.py
│   │   └── config.py      # Settings and configuration
|   |
│   ├── dependencies/      # Dependency injection
│   │   └── __init__.py
│   │    
│   ├── schemas/           # Pydantic models
│   │   └── __init__.py
│   │    
│   └── services/          # Business logic
│       └── __init__.py       
├── requirements.txt       # Python dependencies
├── package.json          # NPM scripts for development
├── .env                  # Environment variables (create this)
└── README.md             # This file
```
 
## Installation

1. **Create virtual environment**:

   ```bash
   python -m venv venv
   ```

2. **Activate virtual environment**:

   Windows:

   ```bash
   venv\Scripts\activate
   ```

   macOS/Linux:

   ```bash
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

### Development Mode

**Windows**:

```bash
npm run dev
```

**macOS/Linux**:

```bash
npm run dev-unix
```

Or directly with uvicorn:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:

- Main API: `http://localhost:8000`
- Interactive docs (Swagger): `http://localhost:8000/docs`
- Alternative docs (ReDoc): `http://localhost:8000/redoc`
 

 
## Contributing

1. Follow the existing project structure
2. Add type hints to all functions
3. Create appropriate Pydantic schemas for new endpoints
4. Document new endpoints in this README
