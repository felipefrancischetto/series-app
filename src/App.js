import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import Navbar from './Navbar'
import Home from './Home'
import Movies from './Movies'
import Series from './Series'
import About from './About'
import Footer from './Footer'

//functiom-stateless component

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/movies' component={Movies}/>
            <Route exact path='/series' component={Series}/>
            <Route exact path='/about' component={About}/>
          <Footer/>
        </div>
      </Router>
    )  
  }
}

export default App
