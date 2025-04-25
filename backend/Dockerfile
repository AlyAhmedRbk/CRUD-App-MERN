FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=4000
ENV MONGO_URI=mongodb://127.0.0.1:27017/mern-app


CMD [ "node", "server.js" ]