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

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact strict path="/" ><News key={'general'} pageSize={9} country={"in"} category={"general"} /></Route>
              <Route exact strict path="/business"><News key={'business'} pageSize={9} country={"in"} category={"business"} /></Route>
              <Route exact strict path="/entertainment"><News key={'entertainment'} pageSize={9} country="in" category={"entertainment"} /></Route>
              <Route exact strict path="/general"><News key={'general'} pageSize={9} country="in" category={"general"} /></Route>
              <Route exact strict path="/health"><News key={'health'} pageSize={9} country="in" category={"health"} /></Route>
              <Route exact strict path="/science"><News key={'science'} pageSize={9} country="in" category={"science"} /></Route>
              <Route exact strict path="/sports"><News key={'sports'} pageSize={9} country="in" category={"sports"} /></Route>
              <Route exact strict path="/technology"><News key={'technology'} pageSize={9} country="in" category={"technology"} /></Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}
