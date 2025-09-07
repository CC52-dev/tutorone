#!/bin/bash

# TutorOne Deployment Script
echo "🚀 Starting TutorOne deployment..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build --force --no-cache -t tutorone:latest .

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Start new containers
echo "🚀 Starting new containers..."
docker-compose up -d

# Show container status
echo "📊 Container status:"
docker-compose ps

# Show logs
echo "📝 Recent logs:"
docker-compose logs --tail=20

echo "✅ Deployment complete! Your app should be running at http://localhost:3000"
