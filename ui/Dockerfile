FROM node:14.1.0

# Changing working directory in container
WORKDIR /usr/src/app

# Install all dependencies from package.json files
COPY package*.json ./
RUN npm install --silent

# Copy source code in container
COPY . .

# Expose app to port and start application
EXPOSE 3000
#CMD [ "npm", "start" ]