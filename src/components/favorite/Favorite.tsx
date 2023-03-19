import Image from "next/image";
import styles from "./Favorite.module.css";

export interface FavoriteProps {
  value: boolean;
  setValue: React.Dispatch<boolean>;
}

export default function Favorite({
  value,
  setValue,
}: FavoriteProps): JSX.Element {
  return value ? (
    <div
      key={"true"}
      className={styles.favorite}
      onClick={() => {
        setValue(!value);
      }}
    >
      <Image src="/check.svg" width={20} height={20} alt="check" />
    </div>
  ) : (
    <div
      key={"false"}
      className={styles.addFavorite}
      onClick={() => {
        setValue(!value);
      }}
    >
      +
    </div>
  );
}
