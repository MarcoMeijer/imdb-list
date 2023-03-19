import DropDown from "../dropdown/Dropdown";
import styles from "./SearchParams.module.css";

export type SearchOrder =
  | "rating ascending"
  | "rating descending"
  | "year ascending"
  | "year descending";

export interface SearchParamsProps {
  orderBy: SearchOrder;
  setOrderBy: React.Dispatch<SearchOrder>;
}

export default function SearchParams({
  orderBy,
  setOrderBy,
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
    </div>
  );
}
