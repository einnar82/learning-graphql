import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";
import { BookType, AuthorType } from "../types";
import {
  allBooks,
  findBooks,
  findBook,
} from "../../core/repositories/book.repository";
import {
  allAuthors,
  findAuthor,
} from "../../core/repositories/author.repository";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return findBook(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return findAuthor(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return allBooks();
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) => {
        return allAuthors();
      },
    },
  },
});

export default RootQuery;
