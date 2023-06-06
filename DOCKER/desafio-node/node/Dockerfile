FROM node:19.9-alpine3.17

WORKDIR /usr/src/app

COPY ./src/index.js .
COPY ./package*.json .

RUN npm install
RUN apk add curl

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]