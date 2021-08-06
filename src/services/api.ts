import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }
});

const client = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const uploadClient = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(
    createUploadLink({
      uri: 'http://descomplicaja-1648230433.us-east-2.elb.amazonaws.com/graphql',
    })
  ),
  cache: new InMemoryCache(),
});

export default client;
