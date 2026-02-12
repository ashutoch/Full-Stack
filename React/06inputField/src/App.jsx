import { useState } from "react";
import ControlledComponent from "./ControlledComponent";


function App() {
  const [val,setVal] = useState()

  return (
    <div>
      <h2>Get Imput Field Value</h2>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter User Name"/>

      {/* onChange function grabs the value when the target value gets changed and we can grab it through the .target.value obj */}

      <h4>{val}</h4>
      <button onClick={()=>setVal("")}>Clear Value</button>

      <hr />
      <ControlledComponent />

    </div>
  )
}

export default App;