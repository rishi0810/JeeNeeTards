import React from 'react'
import Header from "./component/Layout/Header"
import Footer from './component/Layout/Footer'
import { Outlet } from 'react-router-dom'
import { AiProvider } from './context/AiContext'
import Ai from './component/Pages/Ai'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionOfTheDay from './component/components/QuestionOfTheDay';
import QuestionOfTheDayTrigger from './component/components/QuestionOfTheDayTrigger';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {


  return (
  <AiProvider>
    <ScrollToTop />
    <QuestionOfTheDayTrigger />
    <QuestionOfTheDay />
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
