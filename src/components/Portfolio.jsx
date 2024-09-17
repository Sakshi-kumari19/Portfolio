import React from 'react'

import cpp from "../../public/cpp.png"
import  java from "../../public/java.png"
import  python from "../../public/python.png"
import   htmlcss from "../../public/htmlcss.png"

function Portfolio() {
  const itemcard=[
    {
       id:1, 
       logo:python,
       name:"Python"
    },
    {
       id:2, 
       logo:cpp,
       name:"C++"
    },
    {
       id:3, 
       logo:htmlcss,
       name:"HTML CSS"
    },
    {
       id:4, 
       logo:java,
       name:"Java"
    }
    
  ]
  
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 '>
        <div>
        <h1 className='text-3xl font-bold mb-5'>
            Portfolio
        </h1>
        <span className='underline '>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5' >
            {
                itemcard.map(({id,logo,name})=>(
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px] md:ml-20 ' />
                        <div>
                            <div className='px-2 font-semibold mb-2'>{name}</div>
                            <p className='px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='justify-around space-x-4 px-6 py-4 '>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded shadow-xl'>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded shadow-xl'>Source Code</button>
                        </div>
                    </div>
                ))
            }
        </div>


        </div>
    </div>
  )
}

export default Portfolio