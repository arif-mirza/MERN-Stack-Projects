import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./pages/HomePage"
import AboutPage from './pages/AboutPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage />
     <AboutPage />
    </>
  )
}

export default App
