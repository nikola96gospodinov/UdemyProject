import React, { Component } from 'react'

import axios from 'axios'

import SliderTemplates from './slider_templates'

import { URL } from '../../../config'

/*
    1) We have to figure out a way to get the JSON database from the
    JSON file to here and the way we do it is with the componentWillMount
    function and inside we are going to use axios which we first need
    to install with the following command npm install axios --save
    and then we need to import it 

    2) Now inside componentWillMount we write axios.get and inside 
    get we copy the address of the place from which we want to get
    the information from the place where we get the URL from is 
    after we start the JSON server we get a couple of URLs and we
    get the address from the terminal

    3) Now we have the information but we need a way to actually catch 
    it somehow and that is why we write .then and inside we create 
    a function response => {...} and inside the function we can get
    access to the data by typing console.log(response.data) but this
    is just a way to test if we actually get what we need to get
    something that we desire is to use the information from axios.get
    and the way we do it is by typing this.setState and now we can
    change the state of news by setting it to response.data 

    4) In order to limit what it shows because in real life we might
    have a database with thousands of items we might want to load just 
    the last 3 so we add to the link ?_start=0&_end=3 which means
    that we are going to start from index 0 and we are going to move to 
    index 3

    5) In the render we write SliderTemplate which is going to be 
    a component that we are going to create now in the same folder
    we create a file called slider_template.js and inside we create
    the SLiderTemplate component export it and then we import it 
    in this file 

    6) In the slider_template.js the function that creates the component
    is with props becase we want the component to recieve the 
    information from this file and to make sure that this is happening
    inside the SliderTemplate tag we add data = {this.state.news}

    7) Go to slider_template.js 1)

    8) Here instead of having a static type featured we are going to
    pass the type from home.js trough props 

    9) Go to home.js 6)

    10) Now that we have passed props from home.js to this file we
    can use it in the template string by writing ${this.props.start}
    and that would give us more freedom and reusability 

    11) Go to home.js 8)

    12) Now with the new props of settings we can add it to the 
    SliderTemplate tag but that is not going to change dots to false
    if we want to change it we need to do one more thing 

    13) Go to slider_template.js 8)

    14) Since we created the variable URL in config.js we can use the
    URL here as well we first import it and then we paste in axios.get...
    at the appropriate place

    15) Go to newsList.js 4)
*/

class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
            this.setState({
                news:response.data
            })
        })
    }

    render(){
        return(
            <div>
                <SliderTemplates data = {this.state.news} type = {this.props.type} settings = {this.props.settings}/>
            </div>
        )
    }
}

export default NewsSlider