import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import About from './About'
import Body from './Body'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' bg-slate-500 flex justify-between items-center p-2 m-2 w-full'>
      <div className='flex flex-row gap-14 font-extrabold text-black '>
      <Link to={"/"} element={<Body/>}>
      Logo
      </Link>
      <Link to={"/about"} element={<About/>}>
      About
      </Link>
      <Link to={"/contact"} element={<About/>}>
      Contact
      </Link>
    </div>
      <input type="text" name="serach" id="serach" placeholder='Serach' className='
       p-2 m-1 bg-cyan-100 border-2 border-green-400 rounded-md' />
       <a href="/profile">
       <FaUserAlt /></a>
      
    </div>
  )
}

export default Header
