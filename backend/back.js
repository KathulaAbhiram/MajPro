const { ApolloServer, gql } = require('apollo-server');
const users = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  ];
  
const typeDefs = gql`
    type User {
      id: ID!
      name: String!
      email: String!
    }
  
    type Query {
      users: [User!]!
      userfromid(id: ID!): User
    }
`;
const resolvers = {
    Query: {
      users: () => users, 
      userfromid: (_,{id}) =>{return users.find(i=>i.id===id)}
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

module.exports = { User: users };