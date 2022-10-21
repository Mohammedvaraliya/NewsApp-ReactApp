import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="text-center my-5">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner