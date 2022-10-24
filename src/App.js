import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 18;
  country = 'in';
  APIKEY = process.env.REACT_APP_API_KEY4;

  state= {
    progress: 10,
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            />
            <Switch>
              <Route exact strict path="/" ><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'general'} pageSize={this.pageSize} country={this.country} category={"general"} /></Route>
              <Route exact strict path="/home" ><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'general'} pageSize={this.pageSize} country={this.country} category={"general"} /></Route>
              <Route exact strict path="/business"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'business'} pageSize={this.pageSize} country={this.country} category={"business"} /></Route>
              <Route exact strict path="/entertainment"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'entertainment'} pageSize={this.pageSize} country={this.country} category={"entertainment"} /></ Route>
              <Route exact strict path="/general"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'general'} pageSize={this.pageSize} country={this.country} category={"general"} /></Route>
              <Route exact strict path="/health"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'health'} pageSize={this.pageSize} country={this.country} category={"health"} /></Route>
              <Route exact strict path="/science"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'science'} pageSize={this.pageSize} country={this.country} category={"science"} /></Route>
              <Route exact strict path="/sports"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'sports'} pageSize={this.pageSize} country={this.country} category={"sports"} /></Route>
              <Route exact strict path="/technology"><News setProgress={this.setProgress} apiKey={this.APIKEY} key={'technology'} pageSize={this.pageSize} country={this.country} category={"technology"} /></Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}
