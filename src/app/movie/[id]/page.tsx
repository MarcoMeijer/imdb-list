import MovieItem from "@/components/movie/MovieItem";
import { Movie } from "@/types/Movie";
import Image from "next/image";

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
    <div>
      <Image src={movie.image_url} width={260} height={386} alt={""} />
      <h1>
        {movie.year} - {movie.name}
      </h1>
      <h1>IMDB {movie.rating}/10</h1>
      <p>{movie.desc}</p>
      <h1>Directors</h1>
      {movie.directors.map((actor, i) => (
        <p key={i}>{actor}</p>
      ))}
      <h1>Actors</h1>
      {movie.actors.map((actor, i) => (
        <p key={i}>{actor}</p>
      ))}
    </div>
  );
}
