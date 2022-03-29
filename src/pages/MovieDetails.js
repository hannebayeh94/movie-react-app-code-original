import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieimg } from "../utils/getMovieimg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {


  const { movieId } = useParams();
  const [isloading, setIsloading] = useState(true);
  const [movie, setMovie] = useState(null);

  
  useEffect(() => {

  setIsloading(true);

    get(`movie/${movieId}`).then((data) => {
      setMovie(data);
      setIsloading(false);
      // console.log(data);
    });
    
  }, [movieId]);

  if (isloading) {

    return <Spinner />;
    
  }


  if (!movie) {

    return null;
    
  }

  
  const imgUrl = getMovieimg(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage} `}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firsItem}>
          <strong>Tittle:</strong> {movie.title}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
        <p>
          <strong>Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
};
