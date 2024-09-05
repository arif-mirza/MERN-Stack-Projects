import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../src/index.css"
import HomePage from './Pages/Homepage/HomePage.jsx'
import BlogPage from './Pages/BlogPage/BlogPage.jsx'
import Footer  from './Pages/Footer/Footer.jsx'
// import "../src/script.js"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [count, setCount] = useState(0)
  
  

  return (
    <>
    <HomePage />
    <BlogPage />
    <Footer />
    </>
  )
}

export default App
