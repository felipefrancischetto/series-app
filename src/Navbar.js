import React, { Component } from 'react'
import { Menu, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from'react-router-dom'

import api from './Api'

class Navbar extends Component {
  state = { 
    activeItem: 'home',
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {

    const { activeItem } = this.state

    return (
      <div>
        <Segment vertical inverted>
          <Container>
            <Menu fixed='top' style={{position:'relative'}} stackable inverted pointing secondary>

              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                <Link to='/'>Home</Link>
              </Menu.Item>

              <Menu.Item name='filmes' active={activeItem === 'filmes'} onClick={this.handleItemClick}>
                <Link to='/movies'>Filmes</Link>
              </Menu.Item>

              <Menu.Item name='séries' active={activeItem === 'séries'} onClick={this.handleItemClick}>
                <Link to='/series'>Séries</Link>
              </Menu.Item>
              
              <Menu.Item to='/about' name='sobre' active={activeItem === 'sobre'} onClick={this.handleItemClick}>
                <Link to='/about'>Sobre</Link>
              </Menu.Item>

            </Menu>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default Navbar
