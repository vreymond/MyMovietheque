FROM node:14.1.0

# Changing working directory in container
WORKDIR /usr/src/app

# Install all dependencies from package.json files
COPY package*.json ./
RUN npm install

# Copy source code in container
COPY . .

# Expose app to port and start application
EXPOSE 8080
CMD [ "npm", "start" ]