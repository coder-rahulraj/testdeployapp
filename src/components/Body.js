import React from 'react'
import Sidebar from './Sidebar'
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
