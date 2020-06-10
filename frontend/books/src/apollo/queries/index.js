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

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export { getAuthorsQuery, getBookList };
