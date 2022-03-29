import placerholder from "../placeholder.jpg";

export const getMovieimg = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placerholder;
};
