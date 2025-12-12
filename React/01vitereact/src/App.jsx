import Ashu from './ashu.jsx'

function App() {
  const username = "Ashu and React"
  return (
    // <h1>Ashu padh raha Vite + React!</h1>
    <>
      <Ashu />
      <h3>From Chai and Code</h3>
      <p>Learning React is fun but confusing😖! // test paragrah {username}</p> 
    </>
    //* whatver is inside the parentheses is JSX and will be treated as a variable / React Element -> it is called an evaluated expression as we dont write HTML inside JS directly we use JSX to do that and we write the evalauted expression instead of HTML directly
    //! React Fragment
  )
} // can return only one element thats why we enclose in a div tag or fragment [<> </>]

export default App
