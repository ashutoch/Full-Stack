

function App() {
  let fruit = "Apple";

  const handleFruit=()=>{
    fruit = "Banana"
  }

  return (
    <div>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <button onclick={handleFruit}>Change fruit name</button>
    </div>
  )
}

export default App;