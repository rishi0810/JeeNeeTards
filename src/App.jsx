import React from 'react'
import Header from "./component/Layout/Header"
import Footer from './component/Layout/Footer'
import { Outlet } from 'react-router-dom'
function App() {


  return (
  <div style={{ userSelect: 'none' }}>
  <Header />
  <Outlet />
  <Footer/>
  </div>
    
  )
}

export default App
