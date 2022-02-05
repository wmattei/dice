# Dice API

This is an example of an API made with Grapqhl.

## Getting Started
To run it open a terminal and run `make run`.
This will launch a postgres database and start the server.
Then, go to `http://localhost:3000/graphql` to see the playground.

## Considerations

I've created a docker compose file only to make it easier to run the app. In a real world project the database would be outside of the project infra, and the Database URL would be passed as a environment variable.  

### Motivations
I've decided to separate the business logic into a `services` layer, and the database into a `storage` layer. So if the project would have to change its database it would be an quite easy process where we do not have to touch the business logic.

### Resolvers over GraphQL schema
Graphql Schemas are the most common way of build an Graphql API. But as this project is using typescript, i thought it would be good to use the typing and decorators of typescript to automatically generate the schema based on resolvers..

### Dependencies
I've installed a few dependencies to help me on the development

#### apollo-server-core
I've installed this lib so we could have the good old GraphQL playground. As now, Apollo is forcing us to use the new GraphQL studio.

#### apollo-server-express
I'm using express as a REST framework for GraphQL to work on top of.

#### class-validator
Class validator is a very common library in the nodejs world that GraphQL uses to validate inputs.

#### express
The actual express framework

#### graphql
The actual grapqhl library

#### pg
The postgres driver

#### reflect-metadata
A lib that makes reflection richer in typescript.

#### sequelize
The ORM

#### type-graphql
Abstraction of GraphQL for typescript that uses classes and decorators to build a GraphQL schema.


### Things i would do different in a real project

#### Seed
I would use the official seeder that sequelize provides instead of just creating a sql file. I figured that because i am using typescript the CLI would have problemas finding the seeders and configuration files.

#### Docker
I would try to avoid docker-compose. Probably by using a third party service for my database, such as RDS.
