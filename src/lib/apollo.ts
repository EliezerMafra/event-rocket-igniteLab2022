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
    uri: import.meta.env.VITE_API_URL,
    headers: {
      'Authorization': `Bearer ${ import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})