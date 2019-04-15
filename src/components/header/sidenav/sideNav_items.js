import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import "./sidenav.css"

/*
    1) First we create a div inside the return we give it a class name
    so we ca style it, we create a CSS file, we import it and we just
    apply the styles

    2) We neeed to import Link and FontAwesome as well

    3) Inside the div we create a Link to the home page and inside the
    tag we create a FontAwesome icon for the home and then we write 
    Home but we need to style it a bit because it looks bad 

    4) After we style it it looks quite good and so what we can do 
    now is create a new div and put everything that we have inside it
    and then we just copy the div with class name options and just 
    change the bits that we want to change

    5) Something that is better though is to create a function called
    showItems that is going to loop trough everything that we have and it
    is going to output it so we create a list of all the things we want outputed
    called items which are going to have different atributes like type,
    icon, text, link etc.

    6) Then we create the showItems function we are going to return 
    items.map which is going to runa loop trough the items and it is
    going to returnt the following div which is the same as the one
    fomr step 3) but instead of static values we are putting the 
    different values from the arrays like items.type etc.

    7) We call the showItems function 

    8) Go to layoout.js 9)
*/

const SideNavItems = () => {

    const items = [
        {
            type: "option",
            icon: 'sign-out-alt',
            text: 'Sign out',
            link: '/sign-out'
        },
        {
            type: "option",
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: "option",
            icon: 'file',
            text: 'News',
            link: '/news'
        },
        {
            type: "option",
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: "option",
            icon: 'sign-in-alt',
            text: 'Sign in',
            link: '/sign-in'
        }
    ]

    const showItems = () => {
        return items.map( (item, i) => {
            return(
                <div key = {i} className = {item.type}>
                    <Link to = {item.link}>
                        <FontAwesome name = {item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return(
        <div>
            {showItems()}
        </div>
        /*
        <div className = "option">
            <Link to = "/">
                <FontAwesome name = "home"/>
                Home
            </Link>
        </div>
        */
    )
}

export default SideNavItems