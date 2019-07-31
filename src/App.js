import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import CV from './pages/CV'
import Contact from './pages/Contact'


class App extends Component {
  state = {
    width: 0
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { width } = this.state
    const isMobile = width <= 1000

    if (isMobile) {
      return (
        <Router>
          <div>
            <TopNav />
            <Route exact path='/' render={_ => <Home />} />
            <Route exact path='/portfolio' render={_ => <Portfolio />} />
            <Route exact path='/cv' render={_ => <CV />} />
            <Route exact path='/contact' render={_ => <Contact />} />
          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div>
            <Sidebar />
            <Route exact path='/' render={_ => <Home />} />
            <Route exact path='/portfolio' render={_ => <Portfolio />} />
            <Route exact path='/cv' render={_ => <CV />} /> */}
            <Route exact path='/contact' render={_ => <Contact />} />
            </div>
        </Router>
      )
    }
  }
}
export default App;
