import React from 'react'
import Watch from './Watch'
import Body from './Body'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className=' w-1/12 flex flex-col gap-10 ml-2'>
        <Link to={"/"} element={<Body/>}>
      Home
      </Link>
      <Link to={"/watch"} element={<Watch/>}>
      Shorts
      </Link>
      <Link to={"/watch"} element={<Watch/>}>
      Popular
      </Link>
      <Link to={"/watch"} element={<Watch/>}>
      Subscribed
      </Link>
    </div>
  )
}

export default Sidebar
