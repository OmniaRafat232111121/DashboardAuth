import React from 'react'

const PageTitleWithBtn = ({title, icon, btnTitle, onClick}) => {
  return (
    <div className='page_header_with_icon'>
      <h4>{title}</h4>
      <button onClick={onClick}>{icon} {btnTitle}</button>
    </div>
  )
}

export default PageTitleWithBtn