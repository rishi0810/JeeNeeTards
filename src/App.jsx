import React from 'react'
import Header from "./component/Layout/Header"
import Footer from './component/Layout/Footer'
import { Outlet } from 'react-router-dom'
function App() {


  return (
  <>
  <Header />
  <Outlet />
  <Footer/>
  </>
    
  )
}

export default App
