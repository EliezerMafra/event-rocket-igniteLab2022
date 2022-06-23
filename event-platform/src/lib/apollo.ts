import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qz2d1j0cep01z34ruy2dcw/master',
    cache: new InMemoryCache()
})