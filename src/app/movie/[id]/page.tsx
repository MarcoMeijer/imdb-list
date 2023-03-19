import { Movie } from "@/types/Movie";
import Image from "next/image";
import styles from "./page.module.css";
import StarIcon from "@/components/icons/StarIcon";

export interface MoviePageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const response = await fetch(
    "https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json"
  );
  const movieList: Movie[] = await response.json();
  const name = decodeURIComponent(params.id);
  const movie = movieList.find((movie: Movie) => movie.name === name);

  if (movie === undefined) {
    return (
      <div>
        <p>Unknown movie.</p>
      </div>
    );
  }

  return (
    <main className={styles.movieInfo}>
      <h1 className={styles.title}>{movie.name}</h1>
      <p className={styles.underTitle}>
        {movie.year}
        <div className={styles.rating}>
          <StarIcon
            fill="#fbd341"
            width={26}
            height={26}
            style={{ marginBottom: 4, marginRight: 4 }}
          />
          {movie.rating.toFixed(1)}/10
        </div>
      </p>
      <div className={styles.content}>
        <Image src={movie.image_url} width={260} height={386} alt={""} />
        <div className={styles.description}>
          <p>{movie.desc}</p>
          <div className={styles.section}>
            <h1>Directors</h1>
            {movie.directors.map((director, i) => (
              <p key={i}>{director}</p>
            ))}
          </div>
          <div className={styles.section}>
            <h1>Actors</h1>
            {movie.actors.map((actor, i) => (
              <p key={i}>{actor}</p>
            ))}
          </div>
          <div className={styles.section}>
            <h1>Genre</h1>
            {movie.genre.map((genre, i) => (
              <p key={i}>{genre}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
