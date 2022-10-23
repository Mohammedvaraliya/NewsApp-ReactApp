import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    author = "Unknown";
    publishedAt = 'DateNotFound';
    source = 'Unavailable';
    title = "Sorry Title not found please click Read more button to know more :)";
    description = "This is small desription to check if it is working or not";
    imageUrl = "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000";
    newsUrl = "http://localhost:3000/home";
    pageTitle = this.props.category

    constructor(props) {
        super(props);
        console.log("hello i am constructor from News component");
        console.log(this.props.pageSize)
        this.state = {
            articles: [],
            isLoaded: false,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.pageTitle)} - NewsDaddy - Get latest news`
    }

    componentDidMount() {
        this.props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2022-10-20&to=2022-10-20&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        fetch(url).then((res) => res.json())
            .then((result) => {
                this.props.setProgress(40);
                this.setState({
                    articles: result.articles,
                    totalResults: result.totalResults,
                    isLoaded: true,
                });
                this.props.setProgress(60);
                this.props.setProgress(100);
            })
            
    }

    handleUpNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2022-10-20&to=2022-10-20&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        fetch(url).then((res) => res.json())
            .then((result) => {
                this.setState({
                    articles: this.state.articles.concat(result.articles),
                    totalResults: result.totalResults,
                    isLoaded: true,
                    page: this.state.page + 1,
                });
            })
    }

    fetchMoreData = async() => {
        this.props.setProgress(0);
        setTimeout(() => {
            this.handleUpNextClick();
        }, 1000);
        this.props.setProgress(100);
    };


    static propTypes = {}

    render() {
        const { isLoaded, articles } = this.state;
        if (!isLoaded) {
            return <Spinner />;
        }
        else {
            return (
                <>
                <div style={{marginTop: "80px"}}>
                    <h2 className="text-center" style={{ margin: "35px" }}>NewsDaddy - Top {this.capitalizeFirstLetter(this.pageTitle)} Headlines</h2>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length != this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row my-4">
                                {articles.map((element) => {
                                    return <div key={element.url} className="col-md-4 mb-4">
                                        <NewsItem author={element.author ? element.author : this.author} publishedAt={element.publishedAt ? element.publishedAt : this.publishedAt} source={element.source.name ? element.source.name : this.source} title={element.title ? element.title : this.title} newsUrl={element.url ? element.url : this.newsUrl} description={element.description ? element.description : this.description} imageUrl={element.urlToImage ? element.urlToImage : this.imageUrl} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                    </div>

                    {/* <div className="conytainer d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handleUpPreviousClick}>&laquo;&laquo; Previous</button>
                            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleUpNextClick}>Next &raquo;&raquo;</button>
                        </div> */}


                </>
            )
        }
    }
}

export default News