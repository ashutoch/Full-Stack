function User(props){  // we can also pass it inside the function itself using {name} like function User({name}) but remember to use the exact name of the parameter that you have written, otherwise it wont work
    // console.log(props) // it will show the whole key and value 
    // console.log(props.name) // it will only show the value 
    return (
        <div>
            <h3>User Component</h3>
        </div>
    )
}

export default User;
