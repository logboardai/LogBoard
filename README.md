# LogBoard

A modern web application built with Next.js frontend and FastAPI backend, organized as a monorepo with Turbo.

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **Python** >= 3.8
- **npm** >= 11.4.0

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd LogBoard
   ```

2. **Install dependencies**

   ```bash
   # Install all workspace dependencies
   npm install
   ```

3. **Set up Python backend**

   ```bash
   cd apps/backend

   # Create virtual environment
   python -m venv venv

   # Activate virtual environment
   # On macOS/Linux:
   source venv/bin/activate
   # On Windows:
   # venv\Scripts\activate

   # Install Python dependencies
   pip install -r requirements.txt

   cd ../..
   ```

## 🏃‍♂️ Running the Application

### Development Mode

**Option 1: Run both frontend and backend together**

```bash
npm run dev
```

**Option 2: Run frontend and backend separately**

```bash
# Terminal 1 - Frontend (Next.js)
npm run dev:web

# Terminal 2 - Backend (FastAPI)
npm run dev:backend
```

**Option 3: Unix/macOS parallel execution**

```bash
npm run dev:unix
```

### Individual Services

**Frontend only (Next.js)**

```bash
npm run dev:web
# Runs on http://localhost:3000
```

**Backend only (FastAPI)**

```bash
npm run dev:backend
# Runs on http://localhost:8000
# API docs available at http://localhost:8000/docs
```

### Production Build

```bash
# Build all applications
npm run build

# Start frontend in production mode
cd apps/web
npm start
```

## 🛠️ Development Commands

| Command               | Description                                         |
| --------------------- | --------------------------------------------------- |
| `npm run dev`         | Start both frontend and backend in development mode |
| `npm run dev:web`     | Start only the Next.js frontend                     |
| `npm run dev:backend` | Start only the FastAPI backend                      |
| `npm run dev:unix`    | Start both services in parallel (Unix/macOS)        |
| `npm run build`       | Build all applications for production               |
| `npm run lint`        | Run linting across all workspaces                   |
| `npm run format`      | Format code using Prettier                          |
| `npm run check-types` | Run TypeScript type checking                        |

## 📁 Project Structure

```
LogBoard/
├── apps/
│   ├── backend/          # FastAPI Python backend
│   │   ├── app/
│   │   │   ├── api/      # API routes
│   │   │   │   ├── core/     # Core configuration
│   │   │   │   ├── schemas/  # Pydantic models
│   │   │   │   └── services/ # Business logic
│   │   │   ├── venv/         # Python virtual environment
│   │   │   └── main.py       # FastAPI application entry point
│   │   └── web/              # Next.js frontend
│   │       ├── src/
│   │       │   └── app/      # Next.js 13+ app directory
│   │       └── public/       # Static assets
│   └── packages/
│       ├── eslint-config/    # Shared ESLint configuration
│       ├── typescript-config/# Shared TypeScript configuration
│       └── ui/               # Shared UI components
└── turbo.json           # Turbo monorepo configuration
```

## 🌐 API Endpoints

Once the backend is running, you can access:

- **API Base URL**: `http://localhost:8000`
- **API Documentation**: `http://localhost:8000/docs` (Swagger UI)
- **Health Check**: `http://localhost:8000/health`

## 🧪 Testing

```bash
# Run tests (if configured)
npm test

# Run backend tests
cd apps/backend
python -m pytest
```

## 🔧 Environment Setup

Create environment files as needed:

**Backend (.env)**

```bash
cd apps/backend
cp .env.example .env  # If available
# Edit .env with your configuration
```

**Frontend (.env.local)**

```bash
cd apps/web
cp .env.example .env.local  # If available
# Edit .env.local with your configuration
```

## 📦 Technologies Used

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Lucide React** - Icon library

### Backend

- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation
- **SQLAlchemy** - Database ORM
- **Uvicorn** - ASGI server

### Development Tools

- **Turbo** - Monorepo build system
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run check-types`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

[Add your license information here]
