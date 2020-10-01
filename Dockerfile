FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app/

# Run index.js using Node
CMD [ "node", "index.js" ]