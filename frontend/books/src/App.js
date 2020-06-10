import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
