import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const author = "Unknown";
    const publishedAt = 'DateNotFound';
    const source = 'Unavailable';
    const title = "Sorry Title not found please click Read more button to know more :)";
    const description = "This is small desription to check if it is working or not";
    const imageUrl = "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000";
    const newsUrl = "http://localhost:3000/home";
    const pageTitle = props.category

    const updateNews = async() => {
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2022-10-20&to=2022-10-20&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        fetch(url).then((res) => res.json())
            .then((result) => {
                props.setProgress(40);
                setArticles(result.articles);
                setTotalResults(result.totalResults);
                setIsLoaded(true);
                props.setProgress(60);
                props.setProgress(100);
            })
            document.title = `${capitalizeFirstLetter(pageTitle)} - NewsDaddy - Get latest news`
    }

    useEffect(() => {
        updateNews();
    }, [])

    const handleUpNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2022-10-20&to=2022-10-20&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        fetch(url).then((res) => res.json())
            .then((result) => {
                    props.setProgress(40);
                    setArticles(articles.concat(result.articles));
                    setTotalResults(result.totalResults);
                    setIsLoaded(true);
                    props.setProgress(60);
                    props.setProgress(100);
                    setPage(page + 1);
            })
    }

    const fetchMoreData = () => {
        props.setProgress(40);
        setTimeout(() => {
            handleUpNextClick();
            props.setProgress(100);
        }, 1000);
    };

    if (!isLoaded) {
        return <Spinner />;
    }
    else {
            return (
                <>
                <div style={{marginTop: "80px"}}>
                    <h2 className="text-center" style={{ margin: "35px" }}>NewsDaddy - Top {capitalizeFirstLetter(pageTitle)} Headlines</h2>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row my-4">
                                {articles.map((element) => {
                                    return <div key={element.url} className="col-md-4 mb-4">
                                        <NewsItem author={element.author ? element.author : author} publishedAt={element.publishedAt ? element.publishedAt : publishedAt} source={element.source.name ? element.source.name : source} title={element.title ? element.title : title} newsUrl={element.url ? element.url : newsUrl} description={element.description ? element.description : description} imageUrl={element.urlToImage ? element.urlToImage : imageUrl} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                    </div>

                    {/* <div className="conytainer d-flex justify-content-between">
                            <button disabled={page <= 1} type="button" className="btn btn-danger" onClick={handleUpPreviousClick}>&laquo;&laquo; Previous</button>
                            <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-danger" onClick={handleUpNextClick}>Next &raquo;&raquo;</button>
                        </div> */}


                </>
            )
        }
}

News.defaultProps = {
    country: 'in',
    pageSize: 18,
    page: 1,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News