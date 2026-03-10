import { useEffect, useState } from "react";

export default function WindowWidthFunction() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <small>
        Resize the window to see it update.
      </small>
    </div>
  );
}