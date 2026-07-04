import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

// Method can be written here also instead of another file
function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// Can't use these kind of objects yet element are comverting into this form but still the render which is beinhg used can't take these of arguments but there is a valid syntax for passing elements instead of tags which is compatible with render being used which is given below.
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: "Click me to visit google"
}

// This is syntax which is compatible with render.
const name = "Muwahid Cheema"
const ReactElementTwo = React.createElement(
    'a',
    {href:'https://www.google.com',target: '_blank'},
    'Visit Google',
    // After the tree is made then variable injection is evaluated.
    // We can't use If statement or loops in here beacuse they aren't evaluated objects
    name
)

const AnotherElement = (
    <a href="https://www.google.com" target='_blank'> Click me to Visit Google</a>
)
createRoot(document.getElementById('root')).render(
    // AnotherElement
    // ReactElementTwo
    <App/>
)