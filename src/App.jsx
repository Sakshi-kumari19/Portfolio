import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import { Toaster } from 'react-hot-toast'



function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contacts/>
    <Footer/>
    </div>
    <Toaster />
    
    </>
  )
}

export default App
