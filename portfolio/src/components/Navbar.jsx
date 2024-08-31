import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/nav-logo.png";


// function Navbar() {

// //   window.addEventListener("scroll", function(){
// //     const header = document.querySelector("header");
// //     header.classList.toggle("sticky", window.scrollY > 0);
// // })




function Navbar() {
  return (
    <>
<header id="header">
<nav class="navbar navbar-dar navbar-expand-lg bg-body-tertiar" data-bs-theme="dark" >
  <div class="container">
    <a class="navbar-brand" href="#"> <img src={logo} className="logo" /><span style={{color: "#9fa2ab"}}>MirzaArif</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{color: "#9fa2ab" }}>
        <li class="nav-item" style={{color: "#9fa2ab" }}>
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#about" style={{color: "#9fa2ab" }}>About</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#experience" >Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#work" >Work</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link "  href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#blog" >Blog</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

</header>





    </>
  )
}

export default Navbar