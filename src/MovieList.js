import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import { API_URL } from "./global-constants";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(`${API_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, []);

  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id, _id }) => (
        <Movie
          key={_id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={_id}
        />
      ))}
    </section>
  );
}
