import { useState } from "react";
import UseStateExample from "./components/UseStateExample";
import IntervalCounter from "./components/IntervalCounter";
import UserViewer from "./components/UserViewer";
import ThemeContextExample from "./components/ThemeContextExample";
import WindowWidthFunction from "./components/WindowWidthFunction";
import UseRefExample from "./components/UseRefExample";

import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";
import './App.css'

export default function App() {
  const [showInterval, setShowInterval] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    
      <div style={{ padding: "20px" }} className={`${theme}`}>
        <UseStateExample />

        <hr />

        <button onClick={() => setShowInterval(!showInterval)}>
          Toggle Interval Component
        </button>

        {showInterval && <IntervalCounter />}

        <hr />

        <UserViewer />

        <hr />

        <ThemeContextExample />

        <hr />

        <WindowWidthFunction />

        <hr />

        <UseRefExample />

        <hr />

      </div>
    
  );
}