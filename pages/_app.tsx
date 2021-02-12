import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'node-fetch'; // Use node-fetch here to allow SSR

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql', fetch: fetch as any }),
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
