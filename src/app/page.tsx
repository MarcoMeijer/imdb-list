import { Movie } from "@/types/Movie";

export default async function Home() {
  const response = await fetch(
    "https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json"
  );
  const movieList: Movie[] = await response.json();

  return (
    <main>
      {movieList.map((movie, i) => {
        return <p key={i}>{movie.name}</p>;
      })}
    </main>
  );
}
