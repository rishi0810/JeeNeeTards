import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Pages/Home.jsx'
import Neet from './component/Pages/Neet.jsx'
import Jee from "./component/Pages/Jee.jsx"
import Courses from './component/Pages/Courses.jsx'
import Sitemap from './component/Pages/Sitemap.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '' element = {<App/>}>
      <Route path = '' element = {<Home/>} />
      <Route path = 'neet' element = {<Neet/>} />
      <Route path = "jee" element = {<Jee/>} />
      <Route path = "courses" element = {<Courses/>} />
      <Route path = "sitemap.xml" element = {<Sitemap/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
