import React from 'react'
import SideNav from 'react-simple-sidenav'

import SideNavItems from './sideNav_items'

/*
    1) We create a simple function and we export it 

    2) Go to header.js 13)

    3) We then import the SideNav dependency from React

    4) Since this SideNavigation is recieving props we are going to
    include it in the function 

    5) Then we create the SideNav tags inside the div and inside we
    just write options to check if things work for now

    6) Inside the opening SideNav we create the following attributes:
    showNav and we set it equal to {props.showNav} and the showNav 
    inside the curly barckets is the showNav we've created in layout.js
    and we do the same with onHideNav

    7) Go to header.js 15)

    8) And we can also add some in file styling with the navStyle
    attribute

    9) In order to get the items on the sidebar we create a new 
    component called SideNavItems and then we import it, create the
    file etc.

    10) Go to sideNav_items.js 1)
*/

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}
                navStyle = {{
                    background:'#242424',
                    maxWidth: '220px'
                }}
            >
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation