import DropDown from "../dropdown/Dropdown";
import styles from "./SearchParams.module.css";

export type SearchOrder =
  | "rating ascending"
  | "rating descending"
  | "year ascending"
  | "year descending";

export type Genre =
  | "All"
  | "Action"
  | "Adventure"
  | "Animation"
  | "Biography"
  | "Comedy"
  | "Crime"
  | "Drama"
  | "Family"
  | "Fantasy"
  | "Film-Noir"
  | "History"
  | "Horror"
  | "Music"
  | "Musical"
  | "Mystery"
  | "Romance"
  | "Sci-Fi"
  | "Sport"
  | "Thriller"
  | "War"
  | "Western";

export interface SearchParamsProps {
  orderBy: SearchOrder;
  setOrderBy: React.Dispatch<SearchOrder>;
  genre: Genre;
  setGenre: React.Dispatch<Genre>;
}

export default function SearchParams({
  orderBy,
  setOrderBy,
  genre,
  setGenre,
}: SearchParamsProps): JSX.Element {
  return (
    <div className={styles.searchParams}>
      <DropDown
        title={"Order by:"}
        options={[
          "rating ascending",
          "rating descending",
          "year ascending",
          "year descending",
        ]}
        value={orderBy}
        setValue={setOrderBy}
      />
      <DropDown
        title={"Genre:"}
        options={[
          "All",
          "Action",
          "Adventure",
          "Animation",
          "Biography",
          "Comedy",
          "Crime",
          "Drama",
          "Family",
          "Fantasy",
          "Film-Noir",
          "History",
          "Horror",
          "Music",
          "Musical",
          "Mystery",
          "Romance",
          "Sci-Fi",
          "Sport",
          "Thriller",
          "War",
          "Western",
        ]}
        value={genre}
        setValue={setGenre}
      />
    </div>
  );
}
