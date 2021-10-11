const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const { mainCards, animals, categories } = require("./db");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.xx
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Animal,
    Category,
    Query,
    Mutation,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
