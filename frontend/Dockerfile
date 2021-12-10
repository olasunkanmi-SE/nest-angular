# Stage 1:build
FROM node:12 AS development

WORKDIR /ola/frontend/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@13.1.0

COPY . .

RUN npm run build

EXPOSE 4200





