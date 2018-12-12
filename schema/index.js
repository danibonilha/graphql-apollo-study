
const { books } = require('./books');
const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = {
  typeDefs,
  resolvers
}