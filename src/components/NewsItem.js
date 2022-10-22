import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

    static propTypes = {}

    render() {

        let {title, description, imageUrl, newsUrl} = this.props;

        return (
            <>
                <div>
                    <div className="card" style={{width: "20rem", height: "auto", width: "auto"}}>
                        <img src={imageUrl} className="card-img-top" alt="News img" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description.slice(0, 194)}...</p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more..</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem