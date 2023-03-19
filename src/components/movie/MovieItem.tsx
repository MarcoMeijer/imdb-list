import { Movie } from "@/types/Movie";
import Image from "next/image";
import styles from "./MovieItem.module.css";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import Favorite from "../favorite/Favorite";

export interface MovieItemProps {
  movie: Movie;
}

export default function MovieItem({ movie }: MovieItemProps) {
  const [favorite, setFavorite] = useLocalStorage(
    `favorited ${movie.name}`,
    false
  );

  return (
    <div className={styles.movieName}>
      <div className={styles.poster}>
        <Image
          src={movie.thumb_url}
          width={182}
          height={268}
          alt={movie.name}
        />
        <Link href={`/movie/${encodeURIComponent(movie.name)}`}>
          <div className={styles.hover}>
            <p>IMDB {movie.rating}/10</p>
            <p>{movie.year}</p>
          </div>
        </Link>
        <Favorite value={favorite} setValue={setFavorite} />
      </div>
      <h1 className={styles.movieTitle}>{movie.name}</h1>
    </div>
  );
}
