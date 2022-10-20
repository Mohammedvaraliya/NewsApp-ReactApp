import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        This is a News Components
        <NewsItem title="News One" description="unexpected truth about future"/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News