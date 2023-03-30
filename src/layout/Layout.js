import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Content from './Content'
import Sidebar from './Sidebar'

const Index = (props) => {
  const [show, setShow] = useState(false)
  const toggle = state =>{
    setShow(!show)
  }
  return (
    <div className='app-container'>
      <Sidebar toggle={toggle} show={show} />
      <div className="content">
        <Navbar toggle={toggle} show={show} />
        <Content />
      </div>
    </div>
  )
}

export default Index