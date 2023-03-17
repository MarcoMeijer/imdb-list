import { useState } from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";

export interface SearchBarProps {
  onSubmit: (value: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(value);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Image
        className={styles.searchIcon}
        src="/search.svg"
        width={20}
        height={20}
        alt="search"
        onClick={() => onSubmit(value)}
      />
    </div>
  );
}
