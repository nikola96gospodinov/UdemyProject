import React, { Component } from 'react'
import './videosList.css'
import axios from 'axios'

import { URL } from '../../../config'

import Button from '../buttons/button'
import VideoTemplate from './videoTemplate'

/*
    1) We create the different states which are pretty similar to the
    states of newsList.js and we alos create a CSS file and import it

    2) With the props in home.js we pass a prop called title and it
    is set to true and that is why the first step is to create a
    function that is going to decide whether to display the title 
    or not so inside the function we are going to check if this.props.title
    is true or not and based on that we are going to display either
    an h3 tag with the title or nothing at all

    3) Then we create a function that is going to decide whether to
    display the load more button or not and it is pretty much the 
    same idea as the last point 

    4) Since we are creating a Button tag in one of the cases we set
    the type to linkTo which we don't have as a different case in 
    button.js that's why we need to create it 

    5) Go to button.js 5)

    6) For the other option we just create a button that triggers a
    function that does nothing for now

    7) then like we did with newsList.js we create a request function
    and then we call it in componentWillMount

    8) Then we have to create a function that is going to display the
    videos and inside the function we again create different cases

    9) Now instead of creating the template inside the case we are
    going to create a new component that is going to hold the template
    so we pass the necessary data as props 

    10) Go to videoTemplate.js 1)

    11) Now we go back to the loadMore function which was left empty
    before and we are going to create the same thing as we did with
    load more news but there is a problem when we press load more
    we get 3 new videos which is good but when we press the button
    again we get the same videos from 4 to 6 again the way to tackle 
    this problem is to update start and end where we update the videos
    array in request()

    12) We do the same thing in newsList.js 

    13) Go to routes.js 6)
*/

class VideosList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = () => {
        return this.props.title ? 
            <h3><strong>NBA</strong> Videos</h3>
            : null
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then( response => {
                this.setState({
                    teams:response.data
                })
            })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then ( response => {
            this.setState({
                videos:[...this.state.videos,...response.data],
                start, 
                end
            })
        })
    }

    renderVideos = () => {
        let template = null

        switch(this.props.type){
            case('card'):
                template = <VideoTemplate 
                    data = {this.state.videos} 
                    teams = {this.state.teams}
                />
                break
            default:
                template = null
        }
        return template
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }

    renderButton = () => {
        return this.props.loadmore ?
        <Button
            type = "loadmore"
            loadType = {() => this.loadMore()}
            cta = "Load More Videos"
        />
        :
        <Button 
            type = "linkTo" 
            cta = 'More Videos'
            linkTo = '/videos'
        />
    }

    render(){
        return(
            <div className = "videoList_wrapper">
                { this.renderTitle() }
                { this.renderVideos() }
                { this.renderButton() }
            </div>
        )
    }
}

export default VideosList