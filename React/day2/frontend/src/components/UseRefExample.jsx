import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}