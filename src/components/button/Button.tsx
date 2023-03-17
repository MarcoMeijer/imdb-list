import styles from "./Button.module.css";

export interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
}
