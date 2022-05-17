FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN npm run test
