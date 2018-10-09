/* global window:true */

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { CachePersistor } from 'apollo-cache-persist';

import config from './config';

const cache = new InMemoryCache();

if (process.browser) {
  const persistor = new CachePersistor({
    cache,
    storage: global.window.localStorage,
  });
  persistor.restore();
}

const httpLink = createHttpLink({
  uri: config.apiUrl,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const stateLink = withClientState({
  cache,
  defaults: {
    user: {
      __typename: 'User',
      id: null,
      email: null,
      firstName: null,
      lastName: null,
    },
  },
});

const error = onError(({ graphQLErrors, networkError }) => {
  console.log('onError', graphQLErrors, networkError);
});

const client = new ApolloClient({
  link: authLink.concat(ApolloLink.from([error, stateLink, httpLink])),
  cache,
});

export default client;
