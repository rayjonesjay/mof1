# ROBCON Engineers Website

A professional website for ROBCON Engineers and Associates Limited, showcasing their consulting engineering services and expertise.

## Features

- Responsive design optimized for all devices
- Professional engineering-focused layout
- Service showcase with detailed expertise areas
- Contact forms and business information
- Modern React/TypeScript implementation

## Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Docker Deployment

### Build and run with Docker

```bash
# Build the Docker image
docker build -t robcon-website .

# Run the container
docker run -p 3000:3000 robcon-website
```

### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down
```

The website will be available at `http://localhost:3000`

## Production Deployment

The Dockerfile uses a multi-stage build process:
1. Uses Node.js to install dependencies and build the React application
2. Uses the `serve` package to serve the static files on port 3000

### Environment Variables

No environment variables are required for basic functionality.

### Nginx Configuration

The application uses the `serve` package which provides:
- Static file serving
- Client-side routing support (SPA mode)
- Automatic compression

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Web Server**: Nginx (in production)
- **Containerization**: Docker

## License

© 2025 ROBCON Engineers and Associates Limited. All rights reserved.
