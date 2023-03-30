import React from 'react'
import { Card } from 'react-bootstrap'
import Routes from '../pages/Routes/index'
const Content = () => {
  return (
    <Card className='m-3 border-0 shadow-sm p-2 bg-transparent'>
      <Card.Body className='overflow-hidden'>
        <Routes/>
      </Card.Body>
    </Card>
  )
}

export default Content