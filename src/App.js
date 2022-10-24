import './App.css';

import React, { useState } from 'react'
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

const App = () => {
  const pageSize = 18;
  const country = 'in';
  const APIKEY = process.env.REACT_APP_API_KEY4;

  const [progress, setprogress] = useState(10)

  const setProgress = (progress) => {
    setprogress(progress);
  }

    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <Switch>
              <Route exact strict path="/" ><News setProgress={setProgress} apiKey={APIKEY} key={'general'} pageSize={pageSize} country={country} category={"general"} /></Route>
              <Route exact strict path="/home" ><News setProgress={setProgress} apiKey={APIKEY} key={'general'} pageSize={pageSize} country={country} category={"general"} /></Route>
              <Route exact strict path="/business"><News setProgress={setProgress} apiKey={APIKEY} key={'business'} pageSize={pageSize} country={country} category={"business"} /></Route>
              <Route exact strict path="/entertainment"><News setProgress={setProgress} apiKey={APIKEY} key={'entertainment'} pageSize={pageSize} country={country} category={"entertainment"} /></ Route>
              <Route exact strict path="/general"><News setProgress={setProgress} apiKey={APIKEY} key={'general'} pageSize={pageSize} country={country} category={"general"} /></Route>
              <Route exact strict path="/health"><News setProgress={setProgress} apiKey={APIKEY} key={'health'} pageSize={pageSize} country={country} category={"health"} /></Route>
              <Route exact strict path="/science"><News setProgress={setProgress} apiKey={APIKEY} key={'science'} pageSize={pageSize} country={country} category={"science"} /></Route>
              <Route exact strict path="/sports"><News setProgress={setProgress} apiKey={APIKEY} key={'sports'} pageSize={pageSize} country={country} category={"sports"} /></Route>
              <Route exact strict path="/technology"><News setProgress={setProgress} apiKey={APIKEY} key={'technology'} pageSize={pageSize} country={country} category={"technology"} /></Route>
            </Switch>
          </Router>
        </div>
      </>
    )
}

export default App