# GraphiQL Website

## Aim

The purpose of this was to make it really quick and easy to get a server that serves GraphiQL for your GraphQL API.

## Setup

Requirements:

- Node v6
- NPM v3
- Optional: Docker (This is only needed if you want to run the website in a container)

#### Node

If you just want to run the express server on your machine follow these steps:

- Install the packages by running ```npm install```
- Build the frontend assets by running ```npm run build```
- Set the GRAPHQL_SERVER_URL env to be your GraphQL server's url
- Run the website by running ```npm run start```

#### Docker

To run the website in a docker container run: 
```docker run -d --name <container name> -p <port>:3000 -e GRAPHQL_SERVER_URL=<GraphQL Server Url> alexandermcneill/graphiql_website```

If you want to build the image yourself run the following:

- Install the packages by running ```npm install```
- Build the frontend assets by running ```npm run build```
- Build the docker image ```docker build -t <image name> .```
- Start a container ```docker run -d --name <container name> -p <port>:3000 -e GRAPHQL_SERVER_URL=<GraphQL Server Url> <image name>```

