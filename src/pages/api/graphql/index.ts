import context from '@/graphql/context';
import resolvers from '@/graphql/resolvers';
import typeDefs from '@/graphql/typeDefs';
import { ApolloServer } from 'apollo-server-micro';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
