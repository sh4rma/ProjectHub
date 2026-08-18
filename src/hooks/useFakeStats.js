import { useEffect, useState } from "react";

export default function useFakeStats(initialValue) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return count;
}