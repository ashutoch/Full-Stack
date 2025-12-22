import Header from "./Header"

function App(){
  return (
    <div>
      <Header/>
      <h1>First Component</h1>
      <Fruit/>
      <Colors/>
    </div>
  )
}

function Fruit(){
  return (
    <>
      <h2>Apple</h2>
    </>
  )
}

function Colors(){
  return(
    <>
      <h2>Red</h2>
    </>
  )
}

export default App;