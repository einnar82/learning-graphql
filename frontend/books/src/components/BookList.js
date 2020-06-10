import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookList } from "../apollo/queries";

class BookList extends Component {
  getBooks = () => {
    const { data } = this.props;
    const { loading, error, books } = data;
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }
    return books.map((book, index) => {
      return <li key={index}>{book.name}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>{this.getBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBookList)(BookList);
