import React from 'react'
import { Link } from 'react-router-dom'

import './button.css'

/*
    1) We create everything that we need to create we import the necesarry
    libraries, we return whatever we want to return we export it and then
    we import it in newsList.js and we also create a CSS file which we
    also import 

    2) Then we just want to return a template of the button we want
    againwith switch etc. that's why we create a variable called
    template and then witht the switch we look for the type again so
    we take props.type and we take type from newsList and we set the
    case for type = loadMore and we do a default where the template
    will be equal to null and then we return the template after we
    determine the case

    3) In case of loadMore we just return a div with className blue-btn
    and onClick the button is going t trigger props.loadMore which 
    calls the loadMore function in newsList and finally as content
    we put props.cta and now all we have to do is style the button

    4) Go to newsList.js 16)

    5) We just add a new case for linkTo

    6) Go to videoList 6)
*/

const Button = (props) => {

    let template = null

    switch(props.type){
        case 'loadMore':
            template = (
                <div className = "blue_btn"
                    onClick = {props.loadMore}
                >
                    {props.cta}
                </div>
            )
            break
        case 'linkTo':
            template = (
                <Link 
                    to = {props.linkTo}
                    className = "blue_btn"
                >
                    {props.cta}
                </Link>
            )
            break
        default:
            template = null
    }

    return template
}

export default Button