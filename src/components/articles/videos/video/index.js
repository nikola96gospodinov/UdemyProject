import React, { Component } from 'react'
import axios from 'axios'

import { URL } from '../../../../config'

import '../../articles.css'

import Header from './header'
import VideosRelated from '../../../widgets/VideosList/videosRelated/videosRelated'

/*
    1) Here we do basically the same thing we did with the text articles
    we create the states and we even copy eveyrthing in componentWillMount
    function and we just change articles with vides the first time
    we use axios 

    2) Again we do the exact same thing again we write a Header tag
    and we pass as props the necessary information and we also create
    variables for calling the instances of the states

    3) After the Header we create the markup for the title and video
    which is basic HTML and then style it which is CSS

    4) Now we create a function called getRelated which is going to 
    find related videos to the one that we have and we get that 
    function called in the componentWillMount function at the end 

    5) Now for the function itself we use axios to first get the
    teams and then we store them in a variable called teams then
    we call axios again and this time in the URL we type ?q= and then
    we set that equal to this.state.team[0].city which will filter
    everything in the JSON file that matches the city of the team
    we have and then with &_limit=3 we limit the results found to 3
    and finally with setState we update the states of teams and related
    new states that we add

    6) We then create a new component that is going to output the 
    related videos called RelatedVideos and we pass the needed 
    props in it

    7) In the videoRelated.js file we just use VideoTemplated 
    component which makes it pretty simple to make things happen
*/

class VideoArticle extends Component {

    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response => {
                this.setState({
                    article,
                    team: response.data
                })
                this.getRelated()
            })
        })
    }

    getRelated = () => {
        axios.get(`${URL}/teams`)
        .then( response => {
            let teams = response.data

            axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
            .then( response => {
                this.setState({
                    teams,
                    related:response.data
                })
            })
        })
    }

    render(){
        const article = this.state.article
        const team = this.state.team

        return(
            <div>
                <Header teamData = {team[0]}/>
                <div className = "videoWrapper">
                    <h1>
                        {article.title}
                    </h1>
                    <iframe
                        title = "videoplayer"
                        width = "100%"
                        height = "300px"
                        src = {`https://www.youtube.com/embed/${article.url}`}
                    >
                    </iframe>
                </div>
                <VideosRelated
                    data = {this.state.related}
                    teams = {this.state.teams}
                />
            </div>
        )
    }
}

export default VideoArticle