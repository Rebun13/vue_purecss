# STAGE 1: build
FROM node:lts-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run build

# STAGE 2: serve
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]