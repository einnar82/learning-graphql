import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../apollo/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      author_id: "",
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
  };

  handleTextChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  displayAuthors = () => {
    const { data } = this.props;
    const { loading, error, authors } = data;
    if (loading) {
      return <option disabled>Loading Authors..</option>;
    }
    if (error) {
      return <option disabled>Error fetching authors.</option>;
    }
    return authors.map((author, index) => {
      return (
        <option value={author.id} key={index}>
          {author.name}
        </option>
      );
    });
  };

  render() {
    const { name, genre, author_id } = this.state;
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select
            name="author_id"
            value={author_id}
            onChange={this.handleTextChange}
          >
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>Add Book</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
