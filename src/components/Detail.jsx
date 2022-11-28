import { Alert } from 'react-bootstrap'
import React from 'react'

// and so finally Detail can know about the selected element in Table, since
// that information is NOT living in Table anymore! It's living in App, which
// is a direct parent of Detail and can pass this info down to it :)

const Detail = (props) => (
  <Alert variant="success">{props.selectedValue || 'No value selected'}</Alert>
)

export default Detail
