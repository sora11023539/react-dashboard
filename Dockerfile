FROM node:20.14.0-alpine3.19
ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
