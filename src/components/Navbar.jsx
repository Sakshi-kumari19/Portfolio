import React, { useState } from 'react'
import pic from "../../public/women-web-developer-with-laptop-2040890-1721886.webp"
import { AiOutlineMenu } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import {Link } from "react-scroll"


function Navbar() {
    const [menu,setMenu]=useState(false)
    const navitems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Contacts"
        }
        
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white'>
        <div className='flex justify-between items-center h-16 '>
            <div className='flex space-x-2'> 
            <img src={pic} className='h-12 w-15'  /> 
            <h1 className='font-semibold text-xl cursor-pointer'>Sakshi<span className='text-pink-700 text-xl'>K</span>
            <p className='text-sm'>Web Developer</p>
            </h1>
            </div>
            {/* /desk nav bar */}
            <div >
                <ul className='hidden md:flex space-x-3 '>
                    {
                        navitems.map(({id,text}) =>(
                            <li className='hover:scale-105 duration-200 cursor-pointer  ' keys={id}>
                                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                                {text}
                                </Link>
                           </li>
                        ))
                    }
                    
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden '>
                    { menu?<IoCloseSharp size={24}/>:<AiOutlineMenu size={24}/>}
                    </div>
                
            </div>
        </div>
{/* mobile nav bar */}
       { menu && (
        <div className='bg-white'>  
            
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
        {
                        navitems.map(({id,text}) =>(
                            <li className='hover:scale-105 duration-200 cursor-pointer font-semibold text-xl' keys={id}>
                                <Link onClick={()=>setMenu(!menu)}
                                to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                                {text}
                                </Link>
                                </li>
                        ))
                    }
        </ul>                     
    </div>
       )}

        
     
    </div>
  )
}

export default Navbar
