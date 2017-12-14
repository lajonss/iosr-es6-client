FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm run babel
COPY . .
EXPOSE 9000
CMD ["node", "server.js"]