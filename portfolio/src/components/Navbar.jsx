import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/nav-logo.png";

// function Navbar() {

// //   window.addEventListener("scroll", function(){
// //     const header = document.querySelector("header");
// //     header.classList.toggle("sticky", window.scrollY > 0);
// // })




//   return (
//     <>
//       <header>
//         <nav className="navbar" id="navbar">
//           <div className="left-section">
//           <img src={logo} className="logo" />
//           <a href=""  style={{textDecoration:'none', padding : '0 10px'}} className="text-white">
            
//             <span id="logoId" className="text-white">Mirzaarif</span>
//           </a>

//           </div>
         

//           <div className="navigation">
//             <div className="navItems text-white">
//               <a href="" className="text-white">Home</a>
//               <a href="" className="text-white">About</a>
//               <a href="" className="text-white">Skills</a>
//               <a href="" className="text-white">Services</a>
//               <a href="" className="text-white">Portfolio</a>
//               <a href="" className="text-white">Contact</a>
//             </div>
//             {/* navmenu btn */}

//             <div id="nav-menu-btn"></div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }

// export default Navbar;


function Navbar() {
  return (
    <>
<header id="header">
<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" id="navbar">
  <div class="container">
    <a class="navbar-brand" href="#"> <img src={logo} className="logo" /><span>MirzaArif</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Blog</a>
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