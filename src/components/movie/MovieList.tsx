"use client";
import { Movie } from "@/types/Movie";
import styles from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import { useSearchParams } from "next/navigation";
import SearchParams, { Genre, SearchOrder } from "../search/SearchParams";
import { useState } from "react";

export interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const [orderBy, setOrderBy] = useState<SearchOrder>("rating descending");
  const [genre, setGenre] = useState<Genre>("All");

  movies.sort((movie1, movie2) => {
    if (orderBy === "rating ascending") {
      return movie1.rating - movie2.rating;
    } else if (orderBy === "rating descending") {
      return movie2.rating - movie1.rating;
    } else if (orderBy === "year ascending") {
      return movie1.year - movie2.year;
    } else if (orderBy === "year descending") {
      return movie2.year - movie1.year;
    } else {
      return 0;
    }
  });

  const filteredMovies = movies.filter((movie) => {
    if (!movie.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (genre !== "All") return movie.genre.includes(genre);
    return true;
  });

  return (
    <div className={styles.container}>
      <SearchParams
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        genre={genre}
        setGenre={setGenre}
      />
      <div className={styles.movieList}>
        {filteredMovies.map((movie) => {
          return <MovieItem key={movie.name} movie={movie} />;
        })}
      </div>
    </div>
  );
}
