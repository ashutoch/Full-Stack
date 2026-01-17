import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const [rCounter, setRcounter] = useState(10);

    return(
        <div>
            <h3>Counter: {count} </h3>
            <button onClick={() => setCount(count + 1)}> Update Counter </button>
            <h3>Reverse Counter: {rCounter}</h3>
            <button onClick={() => setRcounter(rCounter - 1)}> Update Reverse Counter </button>
        </div>
    )
}

export default Counter;