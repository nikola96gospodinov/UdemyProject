import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

/*
    1) First we import BrowserRouter which is going to let us go to 
    a page that matches the URL for example / for home /players etc

    2) We create an App function that is going to return Routes which
    is in routes.js and there we specify the different URLs and in
    order for this to work we import the routes.js file right after
    we import the components

    3) Go to routes.js and follow through
*/

const App = () => {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

/*
    This is telling React to return App in the HTML document in the
    div with id root which is pretty basic but a really important 
    step
*/

ReactDOM.render(<App />, document.getElementById('root'))