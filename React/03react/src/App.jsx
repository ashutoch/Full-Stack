import { useState } from "react";
import Counter from "./Counter";

function App() {
  // let fruit = "Apple";
  // let count = 10;
  // const handleFruit=()=>{
  //   fruit = "Banana"

  const [fruit, setFruit] = useState ("Apple");  //! the first name "fruit" is a variable and the second name "setFruit" is a function that will update the variable's value

  const handleFruit=()=>{
    setFruit("Banana");
  }

  return (
    <div>
      <h1>State in React JS</h1>
      {/* <h2>{fruit}</h2> */}
      {/* <button onClick={ handleFruit } > Change fruit name </button> */}

      <h2>{fruit}</h2>
      <button onClick={handleFruit}> Change fruit name</button>
      <Counter />
    </div>
  )
}

export default App;