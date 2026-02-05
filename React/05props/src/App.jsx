import { useState } from 'react'
import User from './User'

function App() {
    let name = "Ashu"
    return (
        <div>
            <h1>Props in React JS</h1>
            <User name = {name}/>  
            {/* keep it inside {}. it will work normally too but we need {} for variables and values so its better to use it by default */}
        </div>
    )
}

export default App
