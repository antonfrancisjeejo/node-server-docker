FROM node:9-slim
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . /app
ENV KEY Helloworld
CMD ["npm","start"]