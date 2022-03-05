import { PrismicLink } from 'apollo-link-prismic';
import {
  InMemoryCache,
} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://suskatest.prismic.io/graphql',
  }),
  cache: new InMemoryCache(),
});

export { client };