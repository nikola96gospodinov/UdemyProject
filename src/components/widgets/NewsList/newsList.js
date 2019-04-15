import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './newsListStyle.css'

import { URL } from '../../../config'

import Button from '../buttons/button'
import CardInfo from '../../widgets/CardInfo/cardInfo'

/*
    1) First we create the states we create an 'items' array which is going
    to store the articles and then start, end, amount to store the
    starting point, ending point etc.

    2) In config.js we create a variable called URL which is going to
    store the URL address of the database so we can use it here and
    also in the slider.js file

    3) Go to slider.js 14)

    4) then we create componentWillMount method again and with axios
    we set the get method we set the URL we want and after that we 
    write .then so we can catch the information being passed and then
    inside we use the setState method to change the items state

    5) Now when we are changing the state we want to add articles
    to items not overwrite them so first we access the current state
    of the the state items by writing ...this.state.items and then
    to add what we want to add we write ,...response.data 

    6) Then we create a function called renderNews and we call it 
    inside the render() method by typing this.renderNews() and inside
    the brackets we write this.props.type so we pass the the type that
    we have written in the NewsList tag in home.js

    7) The renderNews method takes as an instance the type and inside
    we create different cases but first we create a variable template
    that we set to null and then in the different cases the template
    is going to be different with default of null

    8) Now our type is card in the home.js so we create the case for 
    card and again we use map to loop through all the items in our case
    this is going to be items array from state and for every iteration
    we create a template 

    9) We create the template until the h2 and we put that in a Link
    tag and we also create a CSS file for styling the h2 and the whole
    div

    10) Now to add the load more button we have to change the code
    a bit so we create a method called request that takes two instances
    start and end and we copy everything from componentWillMount and
    we pase in rquest() and we change this.state.start to just start
    and the same with end and after that in componentWillMount we
    just call the request function by typing this.request and as
    instances we write this.state.start, this.state.end which is 
    from the state object which in turn is passed in the NewsList
    tag in home.js

    11) We add a div in render() and we set the div with onClick that
    when clicked is going to call a function called loadMore which 
    we are going to create right now

    12) Now the loadMore function is going to call request() by taking
    the ending point so far as a starting point (start) so start will
    become this.state.end and the ending point (end) will be be a
    variable that we are going to create again called 'end' that we 
    are going to set to this.state.end (the number of articles that
    we have so far) + this.state.amount (the number of articles that
    we want to add)

    13) Next we add the transitions and that's why we wrap the call
    to renderNews in a TransitionGroup tag and inside the tag we set
    component to div and className to list so this TransitionGroup
    now returns a div so now we need to return a CSSTransition in
    the template that's why wrap everything in the template in a 
    CSSTransition tag and inside the opening tag we set the needed
    properties: classNames we set to only for enter and enterActive
    we set the timeout equal to 500 (.5s) and finally we set the key
    since this is an array to i and finally we add the styles of the
    effects in the CSS file

    14) Since we want to use the button on more than one place we
    are going to create a component out of it so we delete the div
    and we create a Button tag and we pass the following props:
    type = "loadMore" which is basically the name of the button, 
    loadMore = {() => this.loadMore()} which would call the function
    loadMore and cta = "Load More News" which is short for call of 
    action that is going to be the text of the button and then we 
    create the folder and the file for the Button component called
    button.js

    15) Go to button.js 1)

    16) Now in order to get the right team we cannot just say item.team
    because that will output just a number (id) but when we have the
    id we can map it to the actual team so now in the state we 
    create a new state called teams which is going to be an empty 
    array and then in request we add an if statement that is going to
    check the lenght of the array that is in the state teams and if it
    is less than 1 which it is at the initial stage it is going to execute
    the code inside and this will allow us to fetch the teams just once
    and inisde the code with axious we get the teams and then with
    setState we change the teams array 

    17) Then we need to pass this information to the template so it can
    be output and that's why we need to create a new component where
    we are going to output the information and we are going to call it
    CardInfo and we are going to put it before the h2

    18) We create the file for the component we import the libraries 
    we export the component and import it in this file we add some
    dummmy static values and we create a CSS file and style the 
    name of the team and the date

    19) Then we add props to the CardInfo tag so we can pass it to 
    cardInfo.js so we have the teams which we get from request()
    and then team and date that we get from the JSON file 

    20) Go to cardInfo.js 1)
 */

class NewsList extends Component {

    state = {
        teams: [],
        items:[],
        start: this.props.start,
        end: this.props.amount + this.props.start,
        amount: this.props.amount
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

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items:[...this.state.items,...response.data],
                start, 
                end
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }
    
    renderNews = (type) => {
        let template = null

        switch(type){
            case('card'):
                template = this.state.items.map( (item, i) => (
                    <CSSTransition
                        classNames = {{
                            enter: "newsList_wrapper",
                            enterActive: "newsList_wrapper_enter"
                        }}
                        timeout = {500}
                        key = {i}
                    >
                        <div>
                            <div className = "newsList_item">
                                <Link to = {`/articles/${item.id}`}>
                                    <CardInfo
                                        teams = {this.state.teams}
                                        team = {item.team}
                                        date = {item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break
                case('cardMain'):
                    template = this.state.items.map( (item, i) => (
                        <CSSTransition
                        classNames = {{
                            enter: "newsList_wrapper",
                            enterActive: "newsList_wrapper_enter"
                        }}
                        timeout = {500}
                        key = {i}
                        >
                            <Link to = {`/articles/${item.id}`}>
                                <div className = "flex_wrapper">
                                    <div className = "left"
                                        style = {{
                                            background: `url('/images/articles/${item.image}')`
                                        }}
                                    >
                                        <div></div>
                                    </div>
                                    <div className = "right">
                                        <CardInfo
                                            teams = {this.state.teams}
                                            team = {item.team}
                                            date = {item.date}
                                        />
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        </CSSTransition>
                    ))
                    break
            default:
                template = null
        }

        return template
    }

    render(){
        
        return(
            <div>
                <TransitionGroup
                  component = "div"
                  className = "list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                
                <Button
                    type = "loadMore"
                    loadMore = {() => this.loadMore()}
                    cta = "Load More News"
                />
            </div>
        )
    }
}

export default NewsList