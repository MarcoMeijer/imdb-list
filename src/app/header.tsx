"use client";
import SearchBar from "@/components/search/SearchBar";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <SearchBar onSubmit={(value) => router.push(`/?search=${value}`)} />
    </div>
  );
}
