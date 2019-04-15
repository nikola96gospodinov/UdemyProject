import React from 'react'

import VideosList from '../../../widgets/VideosList/videosList'

const VideosMain = () => {
    return(
        <div>
            <VideosList
                type = "card"
                title = {true}
                loadmore = {false}
                start = {0}
                amount = {7}
            />
        </div>
    )
} 

export default VideosMain