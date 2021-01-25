FROM node:14.15.4

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start:docker"]
