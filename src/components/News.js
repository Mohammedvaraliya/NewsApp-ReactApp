import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "The Siasat Daily"
            },
            "author": "Indo-Asian News Service",
            "title": "NASA’s James Webb takes star-filled portrait of Pillars of Creation - The Siasat Daily",
            "description": "According to the space agency, the three-dimensional pillars look like majestic rock formations but are far more permeable.",
            "url": "https://www.siasat.com/nasas-james-webb-takes-star-filled-portrait-of-pillars-of-creation-2438545/",
            "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2022/04/NASa-1.jpg",
            "publishedAt": "2022-10-20T13:18:00Z",
            "content": "New York: NASA has announced that its James Webb Space Telescope has captured a lush, highly detailed landscape — the iconic Pillars of Creation, where new stars are forming within dense clouds of ga… [+1335 chars]"
        },
    ]

    title = "Sorry Title not found please click Read more button to know more :)";
    description = "This is small desription to check if it is working or not";
    imageUrl = "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000";
    newsUrl = "http://localhost:3000/home";

    constructor() {
        super();
        console.log("hello i am constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        console.log("Cdm");
        let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7d3b590442b547308b4c218dc5c7ddcb&page=1';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(this.articles = parsedData.articles);
    }


    static propTypes = {}

    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2>NewsDaddy - Top Headlines</h2>

                <div className="row my-4">
                    {this.articles.map((element) => {
                        return <div key={element.url} className="col-md-4 mb-4">
                            <NewsItem title={element.title ? element.title : this.title} newsUrl={element.url ? element.url : this.newsUrl} description={element.description ? element.description : this.description} imageUrl={element.urlToImage ? element.urlToImage : this.imageUrl} />
                        </div>
                    })}
                </div>
                <div className="conytainer">
                    <button type="button" class="btn btn-dark">&laquo; Previous</button>
                    <button type="button" class="btn btn-dark">Next &raquo;</button>
                </div>

            </div>
        )
    }
}

export default News