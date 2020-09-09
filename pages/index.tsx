import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import AppLayout from '../components/app-layout';

const HomePage: FC = () => {
  return <AppLayout>Homepage</AppLayout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    ...context,
    props: {},
  };
};

export default HomePage;
