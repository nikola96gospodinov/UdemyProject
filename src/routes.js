import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/home/home'
import Layout from './hoc/layout/layout'
import NewsArticle from './components/articles/news/post/index'
import VideoArticle from './components/articles/videos/video/index'
import NewsMain from './components/articles/news/main/mainNews'
import VideosMain from './components/articles/videos/videoMain/videoMain'

/*
    1) First we create a class Routes in which we use the Switch tag
    which will allow us to switch between pages and inside the 
    Switch tags we creat the first Route - for the home page - path
    is set to just / so it shows just when the URL matches the basic
    URL it is set to exact so the home page doesn't show up everywehere
    where we have a / and on component we set it equal to Home which
    we still don't have but we are going to create on the next point

    2) Then we create the home page in the the components folder
    and we import it and now we go to home.js where we create a 
    simple component that just return the text "home" nothing
    special there so far

    3) Then we export Routes on the last line

    4) After that we are going to create the Layout. We wrap the Switch tags
    in Layout tags we don't have Layout at this stage but we are going 
    to import it from the hoc folder anyway and we are going to 
    create it in the next step

    5) Editing the layout.js file go to layout.js

    6) We create a route for the different articles with the path 
    being /article/:id where id would be dynamic and it is going to
    be the id of the article it is exact and the component is 
    NewsArticle that we are going to create in the widgets foldrer
    we import it here then we create, we create a CSS we import all
    the necessary libraries and we export it 

    7) Go to index.js in the one that is in the following path
    components/articles/news/post 1)

    8) We create a Route for the different video articles the same
    way we did for the text articles and now we just create the 
    component which is called VideoArticle and again we use the same
    hiearchy as before we create an index.js file and a header.js
    file 

    9) Go to the folder of the videos to index.js 1)
*/

class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path = "/" exact component = {Home}/>
                    <Route path = "/news" exact component = {NewsMain}/>
                    <Route path = "/videos" exact component = {VideosMain}/>
                    <Route path = "/articles/:id" exact component = {NewsArticle}/>
                    <Route path = "/videos/:id" exact component = {VideoArticle}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes