import { ApolloClient, InMemoryCache } from '@apollo/client';

export const clientAppolo = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv2e9moy000001w63v9j9wo5/master',
    cache: new InMemoryCache(),
});