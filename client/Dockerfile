# Build React app
FROM node:18 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm" , "start"]

# Serve using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
