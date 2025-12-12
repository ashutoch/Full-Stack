import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit Google.'
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Google</a>
)

const anotherUser = "Ashu from React | Clumsy Code"

const reactElement = React.createElement(
  'a', // first parameter is the type of element we want to create
  { href: 'https://www.google.com', target: '_blank' }, // second parameter is the attributes or properties we want to set to that element
  'Click me to visit Google!!!', // third parameter is the children or content we want to put inside that element
  anotherUser
)


createRoot(document.getElementById("root")).render( //render is a method which takes a react element or component and renders it to the DOM
    // <MyApp />
    // <App />
    // anotherElement

    reactElement

);
