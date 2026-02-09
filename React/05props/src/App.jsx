import { useState } from 'react'
import User from './User'
import College from './College'
import Student from './Student'


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

    let userObject2 = {
        userName: "Ashu",
        age: 50,
        gmail: "ashu123@gmail.com"
    }

    let userObject3 = {
        userName: "Ashutoch",
        age: 500,
        gmail: "ashu456@gmail.com"
    }

    const [student, setStudent] = useState()

    let collegeNames = ["IIT", "MIT", "NIT", "DU", "ITI"]

    return (
        <div>
            <h1>Props in React JS</h1> <hr />
            {/* <User name = {name} age = {age} email = {email}/>   */}
            {/* keep it inside {}. it will work normally too but we need {} for variables and values so its better to use it by default */}

            {/* <User name = {userName} age = {aage} email = {gmail} />  */}
            {/* //!passing as variables */}

            <User user = {userObject} />
            <User user = {userObject2} />
            <User user = {userObject3} />
            {/* //!passing as objects */}
            <College names = {collegeNames} />
            { student && <Student name = {student} />}
            <button onClick={()=>setStudent("Ashu")}>Update Student Name</button>
            {/* //!passing as arrays */}

        </div>
    )
}

export default App
