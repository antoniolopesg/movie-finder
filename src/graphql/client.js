import {GraphQLClient} from 'graphql-request';

const client = new GraphQLClient('https://tmdb.apps.quintero.io', {
  cache: false,
});

export default client;
