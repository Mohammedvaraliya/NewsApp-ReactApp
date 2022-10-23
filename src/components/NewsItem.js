import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

    static propTypes = {}

    render() {

        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;

        return (
            <>
                <div>
                    <div className="card rounded-5 mb-3" style={{ width: "20rem", height: "520px", width: "auto" }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            position: "absolute",
                            right: "0",
                        }}>
                        <span className="badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                            <strong>{source}</strong>
                        </span>
                        </div>
                        <img src={imageUrl} style={{maxHeight: "200px"}} className="card-img-top" alt="News img" />
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">By <b>{author}</b> on <b>{new Date(publishedAt).toGMTString()}</b></small></p>
                            <h5 className="card-title">{title.slice(0, 80)}...</h5>
                            <p className="card-text">{description.slice(0, 180)}...</p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more..</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem