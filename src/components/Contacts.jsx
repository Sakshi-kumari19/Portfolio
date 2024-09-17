 import axios from 'axios'
import React from 'react'

 import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Contacts() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message,
        };
        try{
            await axios.post('https://getform.io/f/blljdnzb',userInfo);
            toast.success("Your message has been sent")
        }catch (error){
            console.log(error)
            toast.error("Something went wrong")
        }

      };
    
  return (
    <>
    <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-2xl font-bold mb-4 '>Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-8'>
            <form onSubmit={handleSubmit(onSubmit)} 
            // action="https://getform.io/f/blljdnzb" method="POST"
             className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4 text-center'>Send Your Message</h1>

                <div className='flex flex-col mb-4'>
                    <label  className='block text-gray-700' htmlFor='name'>Full Name</label>
                    <input {...register("name", { required: true })}
                     name="name" type="text"  id ="name" placeholder='Enter Your fullname' className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                      {errors.name && <span>This field is required</span>}
                    
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor='name'>Email Address</label>
                    <input {...register("email", { required: true })} 
                    id="email"
                    name="email" type="text"  placeholder='Email Address' className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                     {errors.email && <span>This field is required</span>}

                </div>
                <div className='flex flex-col mb-4'>
                    <label  className='block text-gray-700' htmlFor='name'>Message</label>
                    <textarea {...register("message", { required: true })} 
                    id="message"
                    name="message" type="text"  placeholder='Type your message here' className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                     {errors.message && <span>This field is required</span>}

                </div>
                <p className='text-center'>
                <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 '>Send</button>

                </p>
            </form>
        </div>

    </div>
    </>
  )
}

export default Contacts
