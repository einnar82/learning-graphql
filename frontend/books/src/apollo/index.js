import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL || "http://localhost:4000/graphql",
});

export default client;
