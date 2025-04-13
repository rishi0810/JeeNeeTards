import React from 'react'
import Header from "./component/Layout/Header"
import Footer from './component/Layout/Footer'
import { Outlet } from 'react-router-dom'
import { AiProvider } from './context/AiContext'
import Ai from './component/Pages/Ai'

function App() {


  return (
  <AiProvider>
    <div style={{ userSelect: 'none' }}>
      <Header />
      <Outlet />
      <Footer/>
      <Ai />
    </div>
  </AiProvider>
    
  )
}

export default App
