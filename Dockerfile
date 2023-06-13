FROM node:18-alpine AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY vite.config.js .
RUN npm install --production --omit=dev
COPY . .
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.25.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]