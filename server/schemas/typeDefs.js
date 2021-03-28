const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String 
        bookCount: Int
        savedBooks: [Books]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input BookInput {
        bookId: String!
        description: String
        title: String 
        authors: [String]
        image: String
        link: String
    }

    type Books {
        bookId: String
        description: String
        image: String 
        link: String
        authors: [String]
        title: String 
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput): User
        deleteBook(bookId: String!): User
    }
`;

module.exports = typeDefs;