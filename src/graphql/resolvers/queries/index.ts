import { getBookmarks as bookmarks } from '@/graphql/resolvers/queries/bookmarks';
import { Resolvers } from '@/graphql/types.generated';

const Query: Resolvers['Query'] = {
  bookmarks,
};

export default Query;
