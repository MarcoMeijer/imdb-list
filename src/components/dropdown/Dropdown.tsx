import styles from "./Dropdown.module.css";

export interface DropDownProps<T extends string> {
  title: string;
  options: T[];
  value: T;
  setValue: React.Dispatch<T>;
}

export default function DropDown<T extends string>({
  title,
  options,
  value,
  setValue,
}: DropDownProps<T>) {
  return (
    <div className={styles.dropdown}>
      <label>{title} </label>
      <select
        value={value}
        onChange={(event) => setValue(event.target.value as T)}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
