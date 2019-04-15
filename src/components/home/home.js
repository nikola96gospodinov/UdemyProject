import React from 'react'

import NewsSlider from '../widgets/newsSlider/slider'
import NewsList from '../widgets/NewsList/newsList'
import VideosList from '../widgets/VideosList/videosList'

/*
    1) Since what we are trying to create for the home page is a 
    reusable component (the slider witht he pics) we are going to
    create it somewhere else so we create a widgets folder in 
    the components folder and we create the folders etc. and we 
    edn up with a file called slider.js

    2) Inside the slider.js we create a basic component called NewsSlider
    which we then export and import here 

    3) Go to slider.js 1)

    4) We set type of NewsSlider to featured 

    5) Go to slider.js 8)

    6) We add another props in this case start and we set it equal 
    to 0 and then amount we set it to 3 and now we can pass the props
    to slider.js 

    7) Go to slider.js 10)

    8) We can add another props settings which is going to be an object
    and there we can set dots to false which is the contrary to what
    we have in slider_template.js 

    9) Go to slider.js 12) 

    10) Now we can copy the NewsSlider tag and just change the values
    inside and it is going to appear a new slider without too much 
    effort and also we can add a new case in the slider_template.js
    file and create something new without too much new code

    11) Next we create a component called NewsList and we do all the
    necessary action like creating a new file, importing the required
    libraries, exporting it and then importing it in this file and
    there we use Transition group so we have to install it so we write
    in the terminal npm install react-transition-group --save

    12) Inside the NewsList we pass the following props type, loadmore,
    start and amount 

    13) Go to newsList.js 1)

    14) After the NewsList tag we create a new tag called VideoList
    which is a component for the list of videos which we haven't
    created yet we then pass all the props that we need and we create 
    the file with importing exportin etc.

    15) Go to videosList.js 1) 
*/

const Home = () => {
    return (
        <div>
            <NewsSlider
                type = "featured"
                start = {0}
                amount = {3}
                settings = {{
                    dots: false
                }}
            />
            <NewsList
                type = "card"
                loadmore = {true}
                start = {3}
                amount = {3}
            />
            <VideosList
                type = "card"
                title = {true}
                loadmore = {false}
                start = {0}
                amount = {3}
            />
        </div>
    )
}

export default Home