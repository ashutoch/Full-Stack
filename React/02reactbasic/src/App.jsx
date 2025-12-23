function App(){
  const name = "Ashu";
  let x = 10;
  let y = 20;

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
      <h1>{fruit()}</h1>
      <h1>{result(x,y)}</h1>
      <h1>{operation(x,y,'*')}</h1>
    </div>
  )
}
export default App;