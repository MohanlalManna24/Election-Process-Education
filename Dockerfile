# Build stage
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run expects the container to listen on the port defined by the PORT environment variable
# By default, Cloud Run sets PORT to 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
