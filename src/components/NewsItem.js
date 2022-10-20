import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {}

    render() {

        let {title, description, imageurl} = this.props;

        return (
            <>
                <div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" className="card-img-top" alt="News img" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/NewsDetail" className="btn btn-primary">Click to know more...</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem