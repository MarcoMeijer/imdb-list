import { Movie } from "@/types/Movie";
import MovieList from "@/components/movie/MovieList";

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
      <MovieList movies={movieList} />
    </main>
  );
}
