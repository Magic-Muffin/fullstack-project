FROM node:latest AS build-env
WORKDIR /usr/src/app
COPY ./app/package*.json ./
RUN npm install
COPY ./app/src/ ./src/
COPY ./app/public ./public/

RUN npm run build

FROM nginx
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-env ./usr/src/app/build ./app
