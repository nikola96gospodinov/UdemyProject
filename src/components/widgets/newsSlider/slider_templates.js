import React from 'react'
import { Link } from 'react-router-dom'

import Slick from 'react-slick'

import './slider.css'

/*
    1) We import Slick that we installed in the begining of the project 
    and just a note that is really important is that we've put a CSS
    link in the HTML file for Slick without which this is not going to work

    2) First we need to configure Slick that is why we create a 
    variable called settings with pretty self-explanatory values amd
    then inside Slick we make a reference to settings by writing 
    {..settings} and now the 3 divs are changing based on the settings

    3) Static divs though is not a good practice so we are going to create
    a template that is why we create a variable called template and
    set it equal to null

    4) We go to slider.js and inside the SliderTemplate tag we create
    an instance type and set it equal to featured so we can use that 
    for the next step 

    5) We create a switch and inside we use props.type to access
    different types and for case we set type to be equal to featured
    as we might want to have different sliders

    6) Now in the case of featured we set template equal to props.data
    which is going to access the data from the JSON file that we've
    passed in the slider.js file and then .map which is go going to
    get trough all the items and it is going to return the template
    that we want to return and also we create a CSS file to style it

    7) Go to home.js 4)

    8) in order to change dots which was done in home.js we need to 
    add to settings ...props.settings and now the dots will be set
    to false and they would disappear 

    9) Go to home.js 10) 
*/

const SliderTemplates = (props) => {

    let template = null

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        ...props.settings
    }

    switch(props.type){
        case('featured'):
            template = props.data.map( (item, i) => {
                return(
                    <div key = {i}>
                        <div className = "featured_item">
                            <div className = "featured_image"
                                style = {{
                                    background:`url(../images/articles/${item.image})`
                                }}
                            ></div>
                        <Link to = {`articles/${item.id}`}>
                                <div className = "featured_caption">
                                    {item.title}
                                </div>
                        </Link>
                        </div>
                    </div>
                )
            })
            break
        default:
            template = null
    }

    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates