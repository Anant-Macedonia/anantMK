import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://ananttest.local/graphql",
  cache: new InMemoryCache(),
});
