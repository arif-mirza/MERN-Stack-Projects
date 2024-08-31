import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import Button from "../components/Button";
// import banner from "../assets/images/main-img.png";
import Banner from "../components/Banner";
import TypingEffect from "../components/TypingEffect";

function HomePage() {

  const email = "mirzaarif919@gamil.com";
  const subject = "Inquiry from Portfolio";
  const body = "Hello, I would like to discuss...";


  return (
    <>
      {/* <Navbar /> */}
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="main-sec d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center mt-5"
                  id="social-Icons"
                >
                  <a href="https://api.whatsapp.com/send?phone=923056223332">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-arif-mirza-1185362b8/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/arif-mirza">
                    <i class="fa-brands fab fab fa-github"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100093423030695">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/arifmirza3332/">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="home-content " id="home-content">
                  <h5 style={{color: "#9fa2ab" }}>Hi, I am</h5>
                  <h1 id="name">Muhammad Arif Mirza</h1>
                  <p
                    className="fw-bold typing-effect"
                    style={{ fontSize: "20px", color : "#9fa2ab" }}
                    
                  >
                    i'm a{" "}
                    <span id="typing-effect">
                      <TypingEffect
                        strings={[
                          "Software Engineer",
                          "MERN stack Developer",
                          "Mobile Application Developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                      />
                    </span>
                  </p>
                  <p style={{color: "#9fa2ab" }}>
                    As a full-stack developer, I create robust web applications,
                    leveraging my expertise in both frontend and backend
                    technologies. Passionate about innovative solutions.
                  </p>
                  <a 
             href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
             >

                  <Button text="Contact me" />
             </a>
                  
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="img-container  d-flex justify-content-center align-items-center mt-4">
                {/* <img src={banner} alt="" id='banner-img'/> */}
                <Banner  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
