import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1);
  };

  const removeValue = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <h1> React Counter App </h1>
      <h2> Counter Value : {counter} </h2>
      <button onClick={removeValue}> Remove Value </button>
      <button onClick={addValue}> Add Value </button>
    </>
  );
}

export default App;
