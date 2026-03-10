import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextExample() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme Context</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}