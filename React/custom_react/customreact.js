function customrender(reactElement, mainContainer) {
    
    
    /*
    const domelem = document.createElement(reactElement.type)
    domelem.innerHTML = reactElement.children
    domelem.setAttribute('href', reactElement.props.href)
    domelem.setAttribute('target', reactElement.props.target)
    
    mainContainer.appendChild(domelem)
    */
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target:"_blank"
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector("#root")

customrender(reactElement , mainContainer)
