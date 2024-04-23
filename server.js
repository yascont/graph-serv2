const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type Currency {
    name: String
    conversionRate: Float
  }

  type Query {
    currencies: [Currency]
  }
`;

// Define your data
const data = {
  currencies: [
    { name: 'EUR', conversionRate: 1.07 },
    { name: 'GBP', conversionRate: 1.24 },
    { name: 'QAR', conversionRate: 0.27 },
    { name: 'SAR', conversionRate: 3.75 },
    { name: 'USD', conversionRate: 1 }
  ]
};

// Define your resolver
const resolvers = {
  Query: {
    currencies: () => data.currencies
  }
};

// Create a new ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
