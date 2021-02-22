import context from '@/graphql/context';
import resolvers from '@/graphql/resolvers';
import typeDefs from '@/graphql/typeDefs';
import { ApolloServer } from 'apollo-server-micro';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  uploads: false,
  subscriptions: false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default handler;
