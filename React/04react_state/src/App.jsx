import { useState } from "react";

function App(){
  const [display, setDisplay] = useState(true); //the true / false value will determine whether the element will be shown or not
  return (
    <>
      <h1>Toggle in React JS</h1>
      {
        display ? <h3>Ashu React seekh raha hai</h3> : <h3>No user is visible</h3>
      }
      {/*conditional rendering, i.e., if the condition is true, it will show the element otherwise it wont */}

      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default App