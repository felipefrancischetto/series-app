import React, { Component } from 'react'
import { Segment, Container } from 'semantic-ui-react'

class Footer extends Component {
  render () {
    return (
      <Segment vertical inverted attached='bottom' style={{position:'relative'}} stackable inverted >
        <Container>
            I'm here to tell you something, and you will probably read me first.
        </Container>
      </Segment>
    )
  }
}

export default Footer