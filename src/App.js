import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

// we'd like to share a piece of info between Table and Detail
// that's not normally possible in React, since you can pass a prop
// just from top -> bottom.
// So, if we elevate the state to the common parent of all the components
// we want to share this piece of info with, we're going to be able to pass it
// down to both of them! effectively, sharing the same source of truth to both
// of them!

class App extends Component {
  state = {
    selected: undefined,
  }

  // we're now going to write a function here, capable of changing the state
  // of the App component. And then, we're going to pass it down to Table as a prop

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table selectedValue={this.state.selected} />
              </Col>
              <Col className="my-auto">
                <Detail />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
