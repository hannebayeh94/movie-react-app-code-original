import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import placerholder from "../placeholder.jpg";
import { getMovieimg } from "../utils/getMovieimg";

export const MovieCard = ({ movie }) => {

  const imgUrl = getMovieimg(movie.poster_path, 300);

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imgUrl}
          alt={movie.title}
          className={styles.movieImage}
        />
      </Link>
      <div>{movie.title}</div>
    </li>
  );
};
