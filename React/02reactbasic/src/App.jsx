// import Header from "./Header"
import { createElement } from "react";

function App() {
  // const userName = "Ashu";
  // let x= 20; 
  // let y = 40;
  // return (
  //   <>
  //     <h1>{userName}</h1>
  //     <h2>{10+20+30}</h2>
  //     <h2>{x+y}</h2>
  //     <button onClick={()=>alert("hello")}>Click me</button>
  //   </>
  // )

  return createElement("div", {id:"rootDiv"}, "hello inside div")

}

export default App;