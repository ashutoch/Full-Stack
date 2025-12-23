function ToDo() {
    function callFun() {
        alert("a function was called");
    }

    return (
        <div>
            <h1>Ashu</h1>
            <img
                src="https://unsplash.com/photos/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU"
                alt="picture of a dog"
                class="photo"
            />

            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click me</button>
        </div>
    );
}

export default ToDo;
