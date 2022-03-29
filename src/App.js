import styles from "./components/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandaingPage } from "./pages/LandaingPage";

export const App = () => {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.tittle}>Movies</h1>
        </Link>
      </header>
      <main>

        <Routes>

          <Route path="/movies/:movieId" element={<MovieDetails />} />            
          <Route path="/" element={<LandaingPage />} />
          <Route path="*" element={<Navigate replace to="/"/>} />


        </Routes>
      </main>
    </Router>
  );
};
