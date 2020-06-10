import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";
import { AuthorType, BookType } from "../types";
import { createAuthor } from "../../core/repositories/author.repository";
import { createBook } from "../../core/repositories/book.repository";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (parent, args) => {
        return createAuthor(args);
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        author_id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        return createBook(args);
      },
    },
  },
});

export default Mutation;
