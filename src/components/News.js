import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsDaddy - Top Headlines</h2>
                <div className="row my-4">
                    <div className="col-md-3">
                        <NewsItem title="News One" description="unexpected truth about future" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="News One" description="unexpected truth about future" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="News One" description="unexpected truth about future" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="News One" description="unexpected truth about future" />
                    </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-3">
                            <NewsItem title="News One" description="unexpected truth about future" />
                        </div>
                        <div className="col-md-3">
                            <NewsItem title="News One" description="unexpected truth about future" />
                        </div>
                        <div className="col-md-3">
                            <NewsItem title="News One" description="unexpected truth about future" />
                        </div>
                        <div className="col-md-3">
                            <NewsItem title="News One" description="unexpected truth about future" />
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default News