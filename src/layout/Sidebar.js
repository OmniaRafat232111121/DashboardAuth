import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import {sidebarLinks as data} from '../static'
const Sidebar = ({toggle,show}) => {
  const location = useLocation()

  return (
    <div className={`sidebar ${show ? 'expanded' : ''}`}>
      <div className="close-icon" onClick={toggle}>
        <MdClose/>
      </div>
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <div className="menu">
          {
            data.map(({id,icon,name:title,path})=>{
              return(
                <Link
                key={id}
                to={path}
                onClick={toggle}
                className={location.pathname === path ? 'active' : ''}>
                  <div className="icon">{icon}</div>
                  <div className="title">{title}</div>
                </Link>
              )
            })
          }

      </div>
      <div className="toggle-width">
        {show ? <FaArrowLeft onClick={toggle} /> : <FaArrowRight onClick={toggle}/>}
      </div>
    </div>
  )
}

export default Sidebar