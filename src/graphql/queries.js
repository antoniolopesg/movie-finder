import {gql} from 'graphql-request';

export const GET_MOVIES = gql`
  query($term: String, $first: Int, $last: Int) {
    movies {
      search(term: $term, first: $first, last: $last) {
        totalCount
        edges {
          node {
            id
            title
            poster(size: W154)
            rating
            overview
          }
        }
      }
    }
  }
`;

export const GET_MOVIE = gql`
  query getMovie($id: Int) {
    movies {
      movie(id: $id) {
        details {
          title
          rating
          overview
          poster(size: W500)
        }
      }
    }
  }
`;
