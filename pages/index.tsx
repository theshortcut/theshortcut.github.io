import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import AppLayout from '../components/app-layout';
const Landing3D = dynamic({
  loader: import('../components/landing-3d'),
  loading: function loading() {
    return <p>Loading...</p>;
  },
  ssr: false,
});

const HomePage: FC = () => {
  return (
    <AppLayout>
      <Landing3D />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
