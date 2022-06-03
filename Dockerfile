FROM node:14.18

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

# Install all node modules
RUN yarn

COPY . .

# Build project
RUN npm run build

# Exposing port 9000 to connect external
EXPOSE 9000

# Start node server with production
CMD ["npm", "start"]
