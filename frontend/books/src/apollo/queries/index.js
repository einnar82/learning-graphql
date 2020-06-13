import { gql } from "apollo-boost";

const getBookList = gql`
  {
    books {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

const getBook = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $author_id: ID!) {
    addBook(name: $name, genre: $genre, author_id: $author_id) {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBookList, addBookMutation, getBook };
