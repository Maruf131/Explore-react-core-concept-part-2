import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(5);
  const addCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const reduceCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px dotted yellow", borderRadius: "20px" }}>
      <h2>Counter : {count} </h2>
      <button onClick={addCount}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
    </div>
  );
}
