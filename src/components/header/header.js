import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import FontAwesome from 'react-fontawesome'

import SideNav from './sidenav/sideNav.js'

/*
    1) We create a basic Header function that returns an HTML header
    tag with some static text so we can test wheter things work 

    2) We export the header component and since it is already imported
    in the layout.js file we can keep on working here

    3) We go to the header folder and we create a CSS file which we then
    import and in the CSS file we add the styles that we want

    4) in the return we give the header tag a class name and then inside
    it we create a div and we give it a class name as well so now we
    can style the components

    5) After we finish styling we write {logo()} which is basically
    going to return the logo function inside the header so the next step
    is to create the logo function

    6) We create the logo function and then we want to return a Link
    but we first need to import Link after we do it then inside the 
    opening Link tag we write to = "/" which means that whenever 
    someone clicks the logo it is going to bring the user to the home
    page and inside we have an img tag where we import the logo we
    also give the img tag a class name so we can style it

    7) Then before calling the logo() we write {navBars()} which again
    is just a line of code that tells React to execute the navBars
    function inside the retrun and of course the next step is to 
    create the nnacBars function

    8) We create the navBars funcition which is going to return an
    icon from FontAwesome we open a div and give it a class name so
    we can style it and then we create a FontAwesome tag but first we
    need to install in the terminal FontAwesome and then import it 
    in this file and the name inside the FontAwesome class is bars 
    which is going to return a hamburger like menu icon and then we
    create in file styling with the style attribute and now we have
    the initial desired look of the header but now we want to get
    the functionality done so when we click the icon a sidenav will
    appear and then we can close it

    9) Go to layout.js 5)

    10) Since we will be passing the props so we can use the functions
    from layout.js we write props inside the function

    11) We create a component called SideNav and we put the tag for
    it inside the header tag before the div and the SideNav component
    is going to need the functions from the Layout component and the
    Header component that's why we write inside it {...props}

    12) Go to sideNav.js 1)

    13) After we create the SideNav component we have to import it

    14) Go to sideNav.js 3) 

    15) And now in order for us to be able to open the sidenav we 
    need to catch somehow the information that we want and that is why
    we passed the props and in the FontAwesome tag we set the attribute
    onClick and that is where we pass the onOpenNav function so now
    we have some kind of trigger to open the sidenav 

    16) Go to sideNav.js 8)
*/

const Header = (props) => {

    const navBars = () => (
        <div className = "bars">
            <FontAwesome name = "bars"
                onClick = {props.onOpenNav}
                style = {{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )

    const logo = () => (
        <Link to = "/" className = {logo}>
            <img alt = "nba logo" src = "logo_transparent.png"/>
        </Link>
    )

    return (
        <header className = "header">
            <SideNav {...props}/>
            <div className = "headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header