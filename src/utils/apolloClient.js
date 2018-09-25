import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloLink } from 'apollo-link';
// import { onError } from 'apollo-link-error';
// import { withClientState } from 'apollo-link-state';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   link: ApolloLink.from([
//     onError(({ graphQLErrors, networkError }) => {
//       console.log('onError', graphQLErrors, networkError);
//     }),
//     withClientState({ resolvers, defaults, cache, typeDefs }),
//     new HttpLink({
//       uri: config.debug ? config.graphQlUriDev : config.graphQlUri,
//       credentials: 'same-origin',
//     }),
//   ]),
//   cache,
// });

export default client;
