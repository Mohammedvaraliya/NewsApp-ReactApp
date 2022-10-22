import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

export default class App extends Component {
pageSize = 9;
country = 'in';
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact strict path="/home" ><News key={'general'} pageSize={this.pageSize} country={this.country} category={"general"} /></Route>
              <Route exact strict path="/business"><News key={'business'} pageSize={this.pageSize} country={this.country} category={"business"} /></Route>
              <Route exact strict path="/entertainment"><News key={'entertainment'} pageSize={this.pageSize} country={this.country} category={"entertainment"} /></ Route>
              <Route exact strict path="/general"><News key={'general'} pageSize={this.pageSize} country={this.country} category={"general"} /></Route>
              <Route exact strict path="/health"><News key={'health'} pageSize={this.pageSize} country={this.country} category={"health"} /></Route>
              <Route exact strict path="/science"><News key={'science'} pageSize={this.pageSize} country={this.country} category={"science"} /></Route>
              <Route exact strict path="/sports"><News key={'sports'} pageSize={this.pageSize} country={this.country} category={"sports"} /></Route>
              <Route exact strict path="/technology"><News key={'technology'} pageSize={this.pageSize} country={this.country} category={"technology"} /></Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}
