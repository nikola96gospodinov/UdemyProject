import React from 'react'

import './videosList.css'

import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo/cardInfo'

/*
    1) Basically we loop through the data and create a Link for the
    entire section and style it however we want to 

    2) Then we just pass props through CardInfo and we get the date
    of the article and the team so that is really handy 

    3) Go to videosList.js 11)
*/

const VideoTemplate = (props) => {
    return props.data.map( (item, i) => {
        return <Link to = {`/videos/${item.id}`} key = {i}>
            <div className = "videoListItem_wrapper">
                <div 
                    className = "left"
                    style = {{
                        background: `url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>
                <div className = "right">
                    <CardInfo 
                        teams = {props.teams}
                        team = {item.team}
                        date = {item.date}
                    />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    })
}

export default VideoTemplate