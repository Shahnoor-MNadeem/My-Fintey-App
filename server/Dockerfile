
# Stage 1: Build React app
FROM node:18 as build

WORKDIR /app

COPY package.json ./

# Install dependencies (including React & Express)
#RUN cd client && npm install && npm run build
RUN npm install

COPY . .

# Expose server port
EXPOSE 5000

CMD ["npm", "start"]
