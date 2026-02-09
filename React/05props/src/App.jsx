import { useState } from 'react'
import User from './User'

function App() {
    // let name = "Ashu", age = 20, email = "ashu@gmail.com";
    // let userName = "Ashutosh";
    // let aage = 69;
    // let gmail = "ashu885@gmail.com";

    let userObject = {
        userName: "Ashutosh",
        age: 5,
        gmail: "ashu@gmail.com"
    }

    return (
        <div>
            <h1>Props in React JS</h1>
            {/* <User name = {name} age = {age} email = {email}/>   */}
            {/* keep it inside {}. it will work normally too but we need {} for variables and values so its better to use it by default */}

            {/* <User name = {userName} age = {aage} email = {gmail} />  */}
            {/* //!passing as variables */}

            <User user = {userObject} />

        </div>
    )
}

export default App
