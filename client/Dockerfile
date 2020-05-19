FROM node:10

#
WORKDIR /usr/src/app

# js dependencies
COPY package*.json ./
RUN npm install

# bundle source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]