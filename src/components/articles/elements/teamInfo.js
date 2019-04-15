import React from 'react'

import '../articles.css'

/*
    1) So right now what we do is just create the HTML part by passing
    the dynamic values with props

    2) Go back to header.js 4)
*/

const TeamInfo = (props) => (
    <div className = "articleTeamHeader">
        <div className = "left"
            style = {{
                background: `url('/images/teams/${props.team.logo}')`
            }}
        >
        </div>
        <div className = "right">
            <div>
                <span>{props.team.city} {props.team.name}</span>
            </div>
            <div>
                <strong>
                    W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                </strong>
            </div>
        </div>
    </div>
)

export default TeamInfo