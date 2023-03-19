"use client";
import { Movie } from "@/types/Movie";
import styles from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import { useSearchParams } from "next/navigation";

export interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const filteredMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <div className={styles.movieList}>
        {filteredMovies.map((movie) => {
          return <MovieItem key={movie.name} movie={movie} />;
        })}
      </div>
    </div>
  );
}
