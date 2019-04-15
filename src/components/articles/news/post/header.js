import React from 'react'

import TeamInfo from '../../elements/teamInfo'
import PostData from '../../elements/postData'

/*
    1) We first create a function called teamInfo which we are going 
    to call in the div with instance the props teamData that we've
    passed in index.js and it going to return either null or a new
    component TeamInfo that we are going to create now 

    2) We create the component TeamInfo we import it, export it etc.

    3) Go to teamInfo.js 1)

    4) Now we create a function for the date and author and again we call
    it and inside we create another component called PostData and
    now we create it ana again inside we just create the template
    and style it

    5) Go to index.js 7)
*/

const Header = (props) => {

    const teamInfo = (team) => {
        return team ? (
            <TeamInfo team = {team}/>
        ) : null
    }

    const postData = (date, author) => (
        <PostData data = {{date, author}}/>
    )

    return(
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}

export default Header