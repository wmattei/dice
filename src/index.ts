import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { dbInit } from "./config/db/init";
import { BetResolver } from "./resolvers/BetResolver";
import { UserResolver } from "./resolvers/UserResolver";

const PORT = 3000;

dbInit();

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, BetResolver],
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () =>
    console.info(
      `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    )
  );
})();
