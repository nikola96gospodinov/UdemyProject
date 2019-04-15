import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

import { CURRENT_YEAR } from '../../config'

/*
    1) we create a basic component, impor react, export the component
    and we create a css file i the folder so we can style the footer 
    we import the CSS file, we also import Link because we want the
    logo to be a link to the home page we give the div class name 
    footer, and then we create the Link tag that is going to the 
    home page and has a class name of logo

    2) Now with the copyright we have a static year and the way to 
    change it is to create a new file in the src folder called config.js
    and inside we create a varibale called CURRENT_YEAR and we export
    it and then we import it in the file that we want it imported to
    and i our case this file and now we can use it here and instead
    of writing a static year we write {CURRENT_YEAR}

    3) then we are going to create a JSON server we get the database
    into the directory of the file and then we have to install JSON
    server install -g json-server and then we need to start the server
    json-server --watch db.json --port 3004

    4) Now instead of writing the long command everytime we want to 
    start the server we can simply go to the package.json file and 
    in the scripts section we can add "dev-serv": "json-server --watch db.json --port 3004"
    and then when we want to start the server we just type 
    npm run dev-serv and this is going to start for us automatically the server
    and dev-serv is the name that we gave the script and it can be
    whatever we want it to be 

    5) Go to home.js
*/

const Footer = () => (
    <div className = "footer">
        <Link to = "/" className = "logo">
            <img alt = "nba logo" src = "/images/nba_logo.png"/>
        </Link>
        <div className = "right">
            @NBA {CURRENT_YEAR} All rights reserved.
        </div>
    </div>
)

export default Footer