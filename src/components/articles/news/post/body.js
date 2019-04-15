import React from 'react'
import NewsArticles from '.';

const Body = (props) => {
    return(
        <div className = "articleBody">
            <h1>{props.articleTitle}</h1>
            <div className = "articleImage"
                style = {{
                    background: `url('/images/articles/${props.articleImage}')`
                }}
            ></div>
            <div className = "articleText">
                {props.articleBody}
            </div>
        </div>
    )
}

export default Body