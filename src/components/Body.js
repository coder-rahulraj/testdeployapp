import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Content from './Content'

const Body = () => {
  return (
    <div className=' flex flex-row w-full gap-5'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Body
