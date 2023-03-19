"use client";
import SearchBar from "@/components/search/SearchBar";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.button}>
        Home
      </Link>
      <SearchBar onSubmit={(value) => router.push(`/?search=${value}`)} />
    </div>
  );
}
