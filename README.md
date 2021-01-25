# Morpher Coding Challenge

A project consisting of a Vue frontend and a REST API using Node/Express backend.

## Project structure 🏗

| Folder   | Description    |
| -------- | -------------- |
| `client` | User facing UI |
| `server` | Backend / API  |

## Stack

- Vue
- Express
- TypeScript
- Sequelize
- Postgres
- Jest
- Cypress
- ESLint
- Prettier

## Running with Docker

- Make sure `docker` and `docker-compose` is installed on your system
- Build the images with `docker build -t client ./client` and `docker build -t server ./server`
- Run `docker-compose up`

Frontend is running on `http://localhost:8080`

Backend is listening on `http://localhost:8000`

## Running for development

For a more rapid development experience it often makes sense to run the project directly on your system.

### Setup

```
npm run setup
```

### Starting the Frontend & Backend

```
npm start
```

This will install all the necessary dependencies for both the `client` and the `server` services and start them up.

### Starting the Frontend

Open a terminal and follow these steps:

```
cd client
npm install
npm start
```

This will install all the necessary dependencies for the `client` frontend project and start it up.
Frontend is running on `http://localhost:8080`

### Starting the Backend

In a separate tab in your terminal, execute the following commands:

```
cd server
npm install
npm start
```

This will install all the necessary dependencies and start the node application using `node` and `nodemon`.
Note that you will have setup your database manually for this to work.
Backend is listening on `http://localhost:8000`
