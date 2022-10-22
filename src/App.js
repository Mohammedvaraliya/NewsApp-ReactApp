import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={9} country={"in"} category={"science"}/>
        </div>
    )
  }
}

