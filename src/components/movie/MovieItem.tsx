import { Movie } from "@/types/Movie";
import Image from "next/image";
import styles from "./MovieItem.module.css";

export interface MovieItemProps {
  movie: Movie;
}

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <div className={styles.movieName}>
      <div className={styles.poster}>
        <Image
          src={movie.thumb_url}
          width={182}
          height={268}
          alt={movie.name}
        />
        <div className={styles.hover}>
          <p>{movie.rating}/10</p>
          <p>{movie.year}</p>
        </div>
      </div>
      <h1 className={styles.movieTitle}>{movie.name}</h1>
    </div>
  );
}
