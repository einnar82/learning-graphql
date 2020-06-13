import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBook } from "../apollo/queries";

class BookDetails extends Component {
  displayBookDetail = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <p>Book Details</p>
        {this.displayBookDetail()}
      </div>
    );
  }
}

export default graphql(getBook, {
  options: (props) => ({
    variables: {
      id: props.bookId,
    },
  }),
})(BookDetails);
