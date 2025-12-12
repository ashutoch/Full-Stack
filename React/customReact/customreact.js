function customRender(reactElement, container) {
/*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // setting attributes to the created dom element
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
*/

    //* A more dynamic way to set attributes to the created dom element
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // setting attributes to the created dom element dynamically
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google.'
} // made a template for our custom react element, so whenever someone wants to create an anchor tag, they can use this template, & it also helps them to know what properties they can pass to the anchor tag & it gives a clear structure of how the element should look like and how they are supposed to write it.

const mainContainer = document.querySelector('#root')

// calling the custom render function to render the react element on the screen using the #root div as the main container
customRender(reactElement, mainContainer);

