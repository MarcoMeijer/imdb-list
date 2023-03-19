import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<T>] {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  const saveValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, saveValue];
}
