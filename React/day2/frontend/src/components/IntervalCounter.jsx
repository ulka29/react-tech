import { useEffect, useState } from "react";

export default function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Interval cleaned up");
    };
  }, []);

  return (
    <div>
      <h2>Interval Counter</h2>
      <p>Seconds: {count}</p>
    </div>
  );
}