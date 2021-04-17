export default function mapGetMovies(searchResult) {
  const mapped = {
    totalCount: searchResult.movies.search.totalCount,
    movies: [],
  };

  searchResult.movies.search.edges.forEach(item => {
    mapped.movies.push(item.node);
  });

  return mapped;
}
