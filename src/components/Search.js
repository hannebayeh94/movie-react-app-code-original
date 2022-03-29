import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import {  useSearchParams } from "react-router-dom";

export const Search = () => {


  const [query, setQuery] = useSearchParams();
  const search = query.get("search");


  const handleSubmit = (e) => {

    e.preventDefault();

  };


  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={search}
          placeholder="Search movies"
          aria-label="Search movies"
          onChange={(e) => {
            
            const value = e.target.value;
            setQuery({ search: value });

          }}
        />
          <FaSearch color="black" size={20} className={styles.searchButton}/>
      </div>
    </form>
  );
};
