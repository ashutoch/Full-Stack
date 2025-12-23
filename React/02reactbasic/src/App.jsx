function App(){
  const name = "Ashu";
  let x = 10;
  let y = 20;
  const userObj={
    name:"ashu",
    email:"ashu@gmail.com",
    phoneno:1234567890
  }
  const userArray = ['ironman','spiderman','batman','superman']
  let path = "https://unsplash.com/photos/brown-tabby-cat-on-white-stairs-mJaD10XeD7w"

  function fruit(){
    return "Mango";
  }
  
  function result(a,b){
    return a+b;
  }
  
  function operation(a, b, op){
    // let result = 0
    if(op =='+'){
      return a+b
    }
    else if(op == '-'){
      return a-b
    }
    else if(op == '*'){
      return a*b
    }
    else if(op == '/'){
      return a/b
    }
    else{
      return "Invalid operation"
    }
  }

  return (
    <div>
      <h1>Yippe for me</h1>
      <h1>{name?name: "user not found"}</h1> 
      {/* ternary operation in case the name is not defined */}
      <h1>{fruit()}</h1>
      <h1>{result(x,y)}</h1>
      <h1>{operation(x,y,'*')}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userObj.phoneno}</h1>
      <h1>{userArray[0]}</h1>
      <h1>{userArray[1]}</h1>
      {/* <img src="https://unsplash.com/photos/brown-tabby-cat-on-white-stairs-mJaD10XeD7w" alt="image of a cat" /> */}  
      <input type="text" value={name}/>
      <br />

      <img src={path} alt="cat" />
    </div>
  )
}
export default App;