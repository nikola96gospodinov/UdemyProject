import React, { Component } from 'react'
import axios from 'axios'

import { URL } from '../../../../config'

import '../../articles.css'

import Header from "./header"
import Body from "./body"

/*
    1) First we create the states: articles which is an array and team
    that is going to be storing the name of the team that the 
    articles is about 

    2) Then we create the ComponentWillMount function and again with
    axios we fetch the information that we need and then with the
    id we access it with this.props.match.params.id and after that
    with .then we catch the information but this time we are going
    to store the article in a variable and it is going to be equal
    to response.data[0] then we run axios again and in the URL we
    use the id of the team by taking it from article.team and then
    we set the states of article and team where now we have the 
    article that we want and the team that we want

    3) We create variables for the article and the team in render
    which is going to save time when we are calling them 

    4) We create two new components Header and Body and we do all
    the necessary steps import libraries, export them and import
    them here

    5) We pass all the necessary props in the Header tag

    6) Go to header.js in the same directory 

    7) Now we just create the HTML and CSS part for the Body tag
    and we are pretty much done 

    8) Go to routes.js 8)
*/

class NewsArticles extends Component {

    state = {
        article:[],
        team:[]
    }

    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response => {
                this.setState({
                    article,
                    team: response.data
                })
            })
        })
    }

    render(){
        const article = this.state.article
        const team = this.state.team

        return(
            <div className = "articleWrapper">
                <Header
                    teamData = {team[0]}
                    date = {article.date}
                    author = {article.author}
                />
                <Body
                    articleTitle = {article.title}
                    articleBody = {article.body}
                    articleImage = {article.image}
                />
            </div>
        )
    }
}

export default NewsArticles