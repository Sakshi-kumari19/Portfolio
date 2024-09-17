import React from 'react'

import pic from "../../public/women-web-developer-with-laptop-2040890-1721886.webp"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

import { ReactTyped } from "react-typed";


function Home() {
  return (<>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mb-10'>
        <div className='flex flex-col md:flex-row '>
                <div className='md:w-1/2 mt-12 md:mt-15 space-y-0  order-2 md:order-1'>
                  <span className='text-xl'>Welcome to my Feed</span>

                  <div className='flex space-x-1 text-2xl md:text-4xl'>
                  <h1>Hello, I'm a</h1>
                  {/* <span className='font-bold text-red-700'>Developer</span> */}
                  <ReactTyped
                          className='font-bold text-blue-800 '
                          strings={["Developer","Programmer","Coder"]}
                          typeSpeed={40}
                          backspeed={50}
                          loop={true}
                           />
                   

                  </div>
                  <br />
                  <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate nesciunt iste adipisci nulla minus aspernatur voluptatem quis laborum vel dolorum dolorem possimus quia debitis aliquam, corporis delectus consectetur sequi.
                  </p>
                  <br />

                  {/* Social media icons */}

                  <div className='space-y-2 '>
                    <h1 className='font-bold mt-5'>Available On:</h1>
                    <ul className='flex space-x-5 '>
                    <li><a href="https://github.com/Sakshi-kumari19"target="_blank"><FaGithub className='text-2xl cursor-pointer '/></a></li>
                    <li><a href="https://www.linkedin.com/in/sakshi-kumari-369998260/"target="_blank"><FaLinkedin className='text-2xl cursor-pointer'/></a></li>
                    <li><a href="https://leetcode.com/u/user7702Km/"target="_blank"><SiLeetcode className='text-2xl cursor-pointer'/></a></li>
                    <li><a href="https://web.telegram.org/a/"target="_blank"><FaTelegram className='text-2xl cursor-pointer'/></a></li>
                    </ul>
                    

                  </div>

                </div>
                {/* right screen side */}
                <div className='md:w-1/2 mt-10 md:mt-10 md:ml-14 md:order-2'>
                <img src={pic} className=' rounded-full md:w-[500px] md:h-[350px]'  alt="" />
                </div>
        </div>
        
      
      
    </div>
    <br />
    <hr />
    </>
  )
}

export default Home
