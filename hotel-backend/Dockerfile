FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

WORKDIR ./dist


EXPOSE 3000 

CMD node api/index.js
