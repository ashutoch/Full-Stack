import { useState } from "react";
import User from "./User";

function App(){
  // const [display, setDisplay] = useState(true); //the true / false value will determine whether the element will be shown or not
  // return (
  //   <>
  //     <h1>Toggle in React JS</h1>
  //     {
  //       // display ? <h3>Ashu React seekh raha hai</h3> : <h3>No user is visible</h3>
  //       display ? <User /> : null
  //     }
  //     {/*conditional rendering, i.e., if the condition is true, it will show the element otherwise it wont */}

      
  //     <button onClick={()=>setDisplay(!display)}>Toggle</button>
  //   </>
  // )


  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Multiple Conditions in React JS</h1>
      <h3>{count}</h3>
      {
        count == 0 ? <h3>Condition 0</h3>
        : count == 1 ? <h3>Condtion 1</h3>
        : count == 2 ? <h3>Condtion 2</h3>
        : count == 3 ? <h3>Condtion 3</h3>
        : count == 4 ? <h3>Condtion 4</h3>
        : count == 5 ? <h3>Condtion 5</h3>
        : count == 6 ? <h3>Condtion 6</h3>
        : count == 7 ? <h3>Condtion 7</h3>
        : count == 8 ? <h3>Condtion 8</h3>
        : count == 9 ? <h3>Condtion 9</h3>
        : count == 10 ? <h3>Condtion 10</h3> 
        : count > 10 && count <= 15 ? <h3>abb baas</h3>
        : count > 15 ? <h3>aur nahi ja raha aage main</h3> : null
      }
      <button onClick={()=>setCount(count + 1)}>Counter</button>
    </div>
  )

}

export default App