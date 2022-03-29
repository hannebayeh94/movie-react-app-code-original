import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empy } from "./Empy";

export const MoviesGrid = ({search}) => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsloading(true);
    const searchurl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "discover/movie?page=" + page;
    get(searchurl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsloading(false);
    });
  }, [search, page]);


  if (!isloading && movies.length === 0) {

    return <Empy />
    
  }


  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </InfiniteScroll>
  );
};
