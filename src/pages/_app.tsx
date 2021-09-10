import { client } from '@/graphql/client';
import { AppComponent } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { Provider } from 'urql';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
