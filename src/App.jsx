import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Home from './pages/Home/Home'
import Router from './Router/Router'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'

function App() {


  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
