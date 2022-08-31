FROM node:16.16.0

WORKDIR /test
ADD . /test

COPY package*.json ./
RUN npm install
# CMD npx wdio
CMD npm run wdio