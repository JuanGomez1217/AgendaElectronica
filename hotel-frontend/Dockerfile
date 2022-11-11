FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app
COPY package.json /app/

RUN npm install -g

COPY . /app/
RUN npm run build

#Seguno es exponer el servicio
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/cheil-hotel /usr/share/nginx/html

