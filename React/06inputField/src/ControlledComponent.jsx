// Controlled Component is a form whose input field value is controlled by React's state

import { useState } from "react";

function ControlledComponent() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState('')

    return (
        <div>
            <h2>Controlled Component</h2>
            <form action="">
                <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter name"/>
                <br /><br />
                <input type="password" onChange={(event)=>setPassword(event.target.value)} value={password} placeholder="Enter password "/>
                <br /><br />
                <input type="text" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter email: "/>
                <br /><br />

                <button>Submit</button>
                <br /><br />
                <h4>The inputs are </h4>
                <h4>Name: {name}</h4>
                <h4>Password: {password}</h4>
                <h4>Email: {email}</h4>

                <button onClick= {()=> { setEmail(''); setName(''); setPassword('')}}>Clear Everything</button>

            </form>
        </div>
    )
}

export default ControlledComponent;