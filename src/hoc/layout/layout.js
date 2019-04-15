import React, { Component } from 'react'

import './layout.css'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

/*
    1) First we create a basic structure of class Layout with a state
    and we are going to render an empty div for now and finally we are going
    to export Layout

    2) Now if write something inside the div it is only going to return
    what is in the div but not what is inside the Layout tag in the 
    routes.js file so in order to correct this we write {this.props.children}
    and now we can put the Header before {this.props...} and Footer
    after it and now when we create more routes inside Switch in hte
    routes.js file we are always going to get the header and footer 
    regardless of the page we are in 

    3) We create a CSS file in the layout folder layout.css we add some
    font families in the HTML file which we are going to use in this
    CSS file and then we import the CSS file

    4) Then with the Header we don't want a static text so we create
    a Header component and put it before {this.props.children} again
    before we create the file we can import header and then we create
    the file header.js and we go to it to add the content that we want

    5) So now in order to know whether we sould open the sidenav or
    not we need to create a state for it and we just write showNav 
    and set it equal to false so initially when we go to the app
    the navbar is not displayed

    6) Then we go inside the Header tag and we put some attributes
    the first one is showNav and we set it equal to the current 
    state that we have {this.state.showNav} then we create onHideNav
    which is going to be hiding the side nav and we set it equal to 
    a function in our case this.toggleSidenav(false) where toggleSidenav
    is a function that we are going to create in a bit and then inside
    this function we pass the value false and finally we create a function
    that is going to do exactly the oopisite called onOpenNav but this
    time we set that one to pass true 

    7) We create the toggleSidenav function which takes action as an
    instance which in the two functions below were either true or false
    and then we write this.setState and we want to then set showNav 
    equal to action (whatever it has been passed) and this is going 
    to toggle the sidenav visibility 

    8) Go to header.js 10)

    9) We create a file footer.js and we import the Footer component
    and we change the static text with the component and now we can
    create something better

    10) Go to footer.js 1)
*/

class Layout extends Component {
    state = {
        showNav: false
    }

    toggleSidenav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render(){
        return(
            <div>
                <Header
                    showNav = {this.state.showNav}
                    onHideNav = {() => this.toggleSidenav(false)}
                    onOpenNav = {() => this.toggleSidenav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout