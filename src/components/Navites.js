import React from 'react'
import About from './About'
import Body from './Body'
import { Link } from 'react-router-dom'
const Navites = () => {
  return (
    // <div>
    //   <ul className=' flex flex-row gap-14'>
    //     <li>
    //         <a href="/about" className='font-extrabold text-black hover:after:text-amber-400'>
    //             About
    //         </a>
    //     </li>
    //     <li>
    //         <a href="/contact" className='font-extrabold text-black hover:after:text-amber-400 '>
    //             Contact
    //         </a>
    //     </li>
    //   </ul>
    // </div>

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
  )
}

export default Navites
