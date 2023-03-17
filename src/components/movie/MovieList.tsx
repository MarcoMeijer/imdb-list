"use client";
import { Movie } from "@/types/Movie";
import styles from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import { useState } from "react";
import SearchBar from "../search/SearchBar";

export interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={(value) => setSearch(value)} />
      <div className={styles.movieList}>
        {filteredMovies.map((movie) => {
          return <MovieItem key={movie.name} movie={movie} />;
        })}
      </div>
    </div>
  );
}
