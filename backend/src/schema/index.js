import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from "graphql";

const dummyBooks = [
  {
    name: "wind of nature",
    genre: "attack",
    id: "1",
    author_id: "1",
  },
  {
    name: "oracle",
    genre: "defense",
    id: "2",
    author_id: "3",
  },
  {
    name: "glowing wand",
    genre: "magic",
    id: "3",
    author_id: "3",
  },
];

const dummyAuthors = [
  {
    name: "John Doe",
    age: 1,
    id: "1",
  },
  {
    name: "Jane Doe",
    age: 2,
    id: "2",
  },
  {
    name: "James Doe",
    age: 3,
    id: "3",
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return dummyAuthors.find((author) => author.id === parent.author_id);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return dummyBooks.filter((book) => book.author_id === parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return dummyBooks.find((book) => book.id === args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return dummyAuthors.find((author) => author.id === args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return [...dummyBooks];
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) => {
        return [...dummyAuthors];
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
