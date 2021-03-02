import AppLayout from '@/components/app-layout';
import { client } from '@/graphql/client';
import { GET_BOOKMARKS } from '@/graphql/queries/bookmarks';
import { GetBookmarksQuery } from '@/graphql/types.generated';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';

interface Props {
  bookmarks: GetBookmarksQuery['bookmarks'];
}

const HomePage: FC<Props> = ({ bookmarks }) => {
  return (
    <AppLayout>
      {bookmarks.map((b) => (
        <div key={b.id}>{b.title}</div>
      ))}
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { bookmarks },
  } = await client.query<GetBookmarksQuery>(GET_BOOKMARKS).toPromise();
  return {
    props: { bookmarks },
  };
};

export default HomePage;
