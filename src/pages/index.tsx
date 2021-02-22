import AppLayout from '@/components/app-layout';
import { initializeApollo } from '@/graphql/client';
import { GET_BOOKMARKS } from '@/graphql/queries/bookmarks';
import { useGetBookmarksQuery } from '@/graphql/types.generated';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';

const HomePage: FC = () => {
  const bookmarksQuery = useGetBookmarksQuery();
  return (
    <AppLayout>
      {bookmarksQuery.data.bookmarks.map((b) => (
        <div key={b.id}>{b.title}</div>
      ))}
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BOOKMARKS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default HomePage;
