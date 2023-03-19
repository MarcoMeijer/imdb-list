import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<T>] {
  const storedValue = localStorage.getItem(key);
  const currentValue =
    storedValue === null ? defaultValue : JSON.parse(storedValue);
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
