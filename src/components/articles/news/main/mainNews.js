import React from 'react'

import NewsSlider from './../../../widgets/newsSlider/slider'
import NewsList from './../../../widgets/NewsList/newsList'

const MainNews = () => {
    return(
        <div>
            <NewsSlider
                type = "featured"
                start = {0}
                amount = {3}
                settings = {{
                    dots: false
                }}
            />
            <NewsList
                type = "cardMain"
                loadmore = {true}
                start = {3}
                amount = {10}
            />
        </div>
    )
}

export default MainNews