FROM node:18

WORKDIR /src

COPY package*.json ./

RUN npm install
RUN npm install -g ts-node
ENV PATH="/usr/local/lib/node_modules/.bin:${PATH}"

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
