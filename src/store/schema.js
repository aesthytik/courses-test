const typeDefs = `
  type User {
    id: Int!
    email: String!
    fullName: String!
    telephone: String
  }

  type Query {
    isOnline: Boolean!
    isLoggedIn: Boolean!
    user: User
  }
`;

export default typeDefs;
