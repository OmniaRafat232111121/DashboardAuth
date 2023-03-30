import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Analytics from '../Analytics'
import Invoice from '../Invoice'
import Schedule from '../Schedule'
import Calender from '../Calender'
import Messages from '../Messages'
import Notifcation from '../Notifcation'
import Settings from '../Settings'
import NotFound from '../404'





const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/invoice' element={<Invoice />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/calender' element={<Calender />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/notifcation' element={<Notifcation />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default index