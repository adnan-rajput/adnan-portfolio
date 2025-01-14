import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Resume from './components/Resume.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App(){
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error />,
    children: [
      {
        path: "/",
        element : <Home />
      },
      {
        path:"about",
        element :<About />
      },
      {
        path : 'resume',
        element : <Resume />
      },     
      {
        path : 'service',
        element : <Services />
      },     
      {
        path : 'project',
        element : <Projects />
      },     
      {
        path : 'contact',
        element : <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
