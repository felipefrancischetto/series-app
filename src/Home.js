import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from'react-router-dom'
import axios from 'axios'

import api from './Api'

class Home extends Component {

  getFilmes() {

  }

  render () {
    return (
      <Router>
        <h1>Home</h1>
      </Router>
    )   
  }
}

export default Home;