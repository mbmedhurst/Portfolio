import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={_ => 
            <Home />} />
          {/* <Route exact path='/Portfolio' render={_ => <Portfolio />} /> */}
          {/* <Route exact path='/CV' render={_ => <CV />} /> */}
          {/* <Route exact path='/Contact' render={_ => <Contact />} /> */}
        </div>
      </Router>
    )
  }
}

export default App;
