import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from'react-router-dom'

import api from './Api'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      genres: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    api.loadGenres().then((res) => {
      this.setState({
        isLoading: false, genres: res.data
      })
    })
  }

  renderGenreLink(genre){
    return (
      <span>&nbsp;<a href=''> {genre } </a>&nbsp; </span>
    )
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Filmes App {this.state.count}</h1>
          {
            this.state.isLoading && <span> Aguarde, carregando...</span>
          }
          {
            !this.state.isLoading && 
            <div>
              ver séries do gêneros: { this.state.genres.map(this.renderGenreLink) }
            </div>
            
          }
        </div>
      </Router>
    )  
  }
}

export default App
