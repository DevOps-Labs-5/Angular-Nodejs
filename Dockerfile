# Dockerfile for Angular Frontend
FROM node:14

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build --prod

EXPOSE 80
CMD ["npx", "http-server", "dist/microservice-angular-app"]
