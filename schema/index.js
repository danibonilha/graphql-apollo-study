const { books } = require("./books");
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

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBook(_, { title, author }) {
      books.push({ title, author });
      return { title, author };
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
