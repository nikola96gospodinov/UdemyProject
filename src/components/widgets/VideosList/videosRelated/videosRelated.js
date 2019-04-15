import React from 'react'

import '../videosList.css'

import VideoTemplate from '../videoTemplate'

const VideosRelated = (props) => (
    <div className = "relatedWrapper">
        <VideoTemplate
            data = {props.data}
            teams = {props.teams}
        />
    </div>
)

export default VideosRelated