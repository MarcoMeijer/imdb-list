import MovieItem from "@/components/movie/MovieItem";
import { Movie } from "@/types/Movie";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch(
    "https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json"
  );
  const movieList: Movie[] = await response.json();

  movieList.sort((movie1: Movie, movie2: Movie) => {
    return movie2.rating - movie1.rating;
  });

  return (
    <main>
      <div className={styles.movieList}>
        {movieList.map((movie) => {
          return <MovieItem key={movie.name} movie={movie} />;
        })}
      </div>
    </main>
  );
}
