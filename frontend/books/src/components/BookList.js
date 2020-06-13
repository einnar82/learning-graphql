import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookList } from "../apollo/queries";
import BookDetails from "../components/BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  handleSelectedChange = (id) => {
    this.setState({
      selected: id,
    });
  };
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
      return (
        <li
          key={book.id}
          onClick={this.handleSelectedChange.bind(this, book.id)}
          style={{
            cursor: "pointer",
          }}
        >
          {book.name}
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <ul>{this.getBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBookList)(BookList);
