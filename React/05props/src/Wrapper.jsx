function Wrapper({children, color = "cornflowerblue"}) { 
    return(
        <div style={{color: color, border: "5px solid lightblue", width: "300px", margin: "30px", justifyContent: "center", alignItems: "center", textAlign: "center",}}>
            {/* <h2>Hello Everyone</h2> */}
            {children}
            {/* when we pass children then it passes whatever is wriiten inside the closing brackets in the App part, i.e., inside the wrapper*/}
        </div>
    )
}

export default Wrapper;