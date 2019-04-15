import React from 'react'
import FontAwesome from 'react-fontawesome'

import './cardInfo.css'

/*
    1) We use the props that we have from newsList.js so we can get dynamic 
    values for the the date  and we get those from the JSON file

    2) Then in order to output the correct name of each team we need
    to create a function that is going to find the name of the team
    based on the id that we have we are going to name it teamName 
    and the instances that it is going to need is the list of all
    teams and the id of the team that we have in our case all of this
    is stored in props 

    3) So we create the function and inside we use find which is
    going to find if the the item's id is matching any of the teams 
    which is called team and if data is true then we return data.name
    which is the name of the team

    4) Go to home.js 14)
*/

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item)=>{
            return item.id === team
        })
        if(data){
            return data.name
        }
    }

    return(
        <div className = "cardInfo">
            <span className = "teamName">
                {teamName(props.teams, props.team)}
            </span>
            <span className = "date">
                <FontAwesome name = "clock-o"/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo