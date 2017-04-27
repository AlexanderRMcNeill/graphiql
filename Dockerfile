FROM node:6-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./server /usr/src/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]