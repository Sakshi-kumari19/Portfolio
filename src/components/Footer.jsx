import React from 'react'
import { FaLinkedin, FaTelegram,FaWhatsapp,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12 bg-slate-200'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className='flex flex-col items-center justify-center '>
        <div className='flex space-x-4'>
        
      
          <FaLinkedin size={24}/>
          <FaTelegram size={24}/>
          <FaWhatsapp size={24}/>
          <FaInstagram size={24}/>
          
        </div>
        <div className='mt-5 border-t border-gray-700 pt-5  flex flex-col items-center'>
          <p className='text-sm'>
            &copy; 2024 Your company. All rights reserved.
          </p>
        </div> 

        </div>

      </div>
      
    </footer>
    </>
  )
}

export default Footer
