import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    title = "Sorry Title not found please click Read more button to know more :)";
    description = "This is small desription to check if it is working or not";
    imageUrl = "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000";
    newsUrl = "http://localhost:3000/home";

    constructor(props) {
        super(props);
        console.log("hello i am constructor from News component");
        console.log(this.props.pageSize)
        this.state = {
            articles: [],
            isLoaded: false,
            page: 1,
        }
    }

    componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&from=2022-10-20&to=2022-10-20&sortBy=popularity&apiKey=45dd4adc8f204b1e839546385882a2ff&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        fetch(url).then((res) => res.json())
            .then((result) => {
                this.setState({
                    articles: result.articles,
                    totalResults: result.totalResults,
                    isLoaded: true,
                });
            })
    }

    handleUpPreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&from=2022-10-20&to=2022-10-20&sortBy=popularity&apiKey=45dd4adc8f204b1e839546385882a2ff&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({isLoaded: true});
        fetch(url).then((res) => res.json())
            .then((result) => {
                this.setState({
                    page: this.state.page - 1,
                    articles: result.articles,
                    isLoaded: true,
                });
            })
    }

    handleUpNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&from=2022-10-20&to=2022-10-20&sortBy=popularity&apiKey=45dd4adc8f204b1e839546385882a2ff&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        fetch(url).then((res) => res.json())
            .then((result) => {
                this.setState({
                    page: this.state.page + 1,
                    articles: result.articles,
                    isLoaded: true,
                });
            })
    }


    static propTypes = {}

    render() {
        const { isLoaded, articles } = this.state;
        if (!isLoaded) {
            return <Spinner/>;
        }
        else {
            return (
                <>
                    <div className='container my-3'>
                        <h1 className="text-center">NewsDaddy - Top Headlines</h1>
                        <div className="row my-4">
                            {articles.map((element) => {
                                return <div key={element.url} className="col-md-4 mb-4">
                                    <NewsItem title={element.title ? element.title : this.title} newsUrl={element.url ? element.url : this.newsUrl} description={element.description ? element.description : this.description} imageUrl={element.urlToImage ? element.urlToImage : this.imageUrl} />
                                </div>
                            })}
                        </div>
                        <div className="conytainer d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handleUpPreviousClick}>&laquo;&laquo; Previous</button>
                            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleUpNextClick}>Next &raquo;&raquo;</button>
                        </div>

                    </div>
                </>
            )
        }
    }
}

export default News