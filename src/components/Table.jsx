import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // no state anymore here! this is now a "stateless" component
  // we just moved the state object to App, which is now parent of both Table and Detail

  checkSelected = (value) =>
    value === this.props.selectedValue ? 'selected' : ''

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={() => this.props.changeSelected('First')}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.changeSelected('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.changeSelected('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Local state is {this.props.selectedValue || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
