// function User(props){  //! we can also pass it inside the function itself using {name} like function User({name}) but remember to use the exact name of the parameter that you have written, otherwise it wont work unless you have passed it
     // console.log(props) //! it will show the whole key and value 
     // console.log(props.name) //! it will only show the value 
//     return (
//         <div>
//             <h2>User Component</h2>
//             <h4>Name: {props.name}</h4>
//             <h4>Age: {props.age}</h4>
//             <h4>Email: {props.email}</h4>
//         </div>
//     )
// }

// function User({name, age, email}){  //! we can also pass it inside the function itself
//     return (
//         <div>
//             <h2>User Component</h2>
//             <h4>Name: {name}</h4>
//             <h4>Age: {age}</h4>
//             <h4>Email: {email}</h4>
//         </div>
//     )
// }

function User({user}){
    return (
        <div>
            <h2>User Component</h2>
            <h4>Name: {user.userName}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.gmail}</h4>
            <hr />
        </div>
    )
}

export default User;
