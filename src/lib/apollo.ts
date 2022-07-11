import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  }


export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qz2d1j0cep01z34ruy2dcw/master',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})