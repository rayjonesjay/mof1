# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Expose port (Render will use the PORT environment variable)
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]