import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
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
          type: GraphQLString,
        },
        age: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) => {
        return createAuthor(args);
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author_id: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        return createBook(args);
      },
    },
  },
});

export default Mutation;
