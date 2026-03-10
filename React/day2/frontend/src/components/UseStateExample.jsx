import { useState } from "react";

export default function UseStateExample() {
  const [name, setName] = useState("Ulka");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>useState Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}