import { Movie } from "@/types/Movie";
import Image from "next/image";
import styles from "./MovieItem.module.css";
import Link from "next/link";

export interface MovieItemProps {
  movie: Movie;
}

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <div className={styles.movieName}>
      <Link href={`/movie/${encodeURIComponent(movie.name)}`}>
        <div className={styles.poster}>
          <Image
            src={movie.thumb_url}
            width={182}
            height={268}
            alt={movie.name}
          />
          <div className={styles.hover}>
            <p>IMDB {movie.rating}/10</p>
            <p>{movie.year}</p>
          </div>
        </div>
      </Link>
      <h1 className={styles.movieTitle}>{movie.name}</h1>
    </div>
  );
}
