import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import Button from "../components/Button";
// import banner from "../assets/images/main-img.png";
import Banner from "../components/Banner";
import TypingEffect from "../components/TypingEffect";

function HomePage() {


  return (
    <>
      <Navbar />
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="main-sec d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center mt-5"
                  id="social-Icons"
                >
                  <a href="https://api.whatsapp.com/send?phone=923036319414">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-arif-1185362b8/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/arif-mirza">
                    <i class="fa-brands fab fab fa-github"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100093423030695">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/mirzaarif723/">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="home-content " id="home-content">
                  <h5 className="text-white">Hi, I am</h5>
                  <h1 id="name">Muhammad Arif Mirza</h1>
                  <p
                    className="text-white fw-bold typing-effect"
                    style={{ fontSize: "20px" }}
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
                  <p>
                    As a full-stack developer, I create robust web applications,
                    leveraging my expertise in both frontend and backend
                    technologies. Passionate about innovative solutions.
                  </p>
                  <Button text="Contact me" />
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
