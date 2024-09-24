import React, { useEffect } from 'react'
import "../styles/AboutPage.css";
import aboutimg from "../assets/images/about-img.png";
import Button from '../components/Button';
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import github from "../assets/icons/github.png";
import scss from "../assets/icons/scss.png";
import sass from "../assets/icons/sass.png";
import antDesign from "../assets/icons/aunt-Design.png";
import bootstrap from "../assets/icons/bootstrap.png";
import react from "../assets/icons/react.png";
import reactNative from "../assets/icons/react-native.png";
import firebase from "../assets/icons/firebase.png";
import node from "../assets/icons/node.png";
import expressjs from "../assets/icons/express.png";
import mongodb from "../assets/icons/mongodb.png";
import git from "../assets/icons/git.png";
import restApi from "../assets/icons/restapi.png";
import javascript from "../assets/icons/javascript.png"
import CV from "../assets/images/Muhammad Arif Official(f).pdf"
import redux from "../assets/icons/redux.png";
import yup from "../assets/icons/yup.png"


import TypingEffect from "../components/TypingEffect";
import tectData from '../DB/teckStack';

{/* <h3 class="counter" data-target="3000"></h3> */}

function AboutPage(props) {

useEffect(() => {
  // counter functionallity
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    //  console.log(counter);
     counter.innerHTML = 0;
  const updateCounter = () => {
      const startingCount = Number(counter.innerHTML);
  
      const targetCount = +counter.getAttribute("data-target");
  
      const incr = targetCount / 100;
      if( startingCount < targetCount){
          counter.innerHTML = `${startingCount + incr}`;
      }
      // console.log(targetCount);
      setTimeout(updateCounter, 10);
  
  }
  
  
     updateCounter();
  });

},[])


// const createItem = (item) => {
//   return (
//     <SingleItem 
//     icon = {props.icon}
//     title = {item.title}
//     id={props.id}
    
    
    
//     />
//   )
// }

  








  return (
    <>
    <div className="py-5" id='#About'>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-12">
            <h1 id='section-title-01'>About Me</h1>
            <h1 id='section-title-02'>About Me</h1>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="container" >
        <div className="row">
          {/* image sec */}
          <div className="col-12 col-md-4">
            <div className="img-sec" id='center-div'>
              <img src={aboutimg} alt="" />
            </div>

          </div>
          {/* content sec */}
          <div className="col-12 col-md-8 d-flex justify-content-start align-items-center flex-column">
            <div className="info" style={{color: "#9fa2ab" }}>
              <h2 className='mb-4 fw-bold about-name text-white'>Hello I'm Muhammad Arif Mirza</h2>
              <h5 className='sec-about'>A Lead <span>
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
                
                </span> based in Faisalabad,Pakistan</h5>
              <p>Hello! I'm Mirza Arif, a full-stack software engineer from Faisalabad, PK.</p>
              <p>I have expertise in Web Applications(MERN), and Mobile Application(React Native).I bring a diverse background, having worked collaboratively in teams professionally, participated in International Hackathons, worked independently as a freelancer.</p>

              <p> I study Web Application Development and Mobile Applicaiton Development in <a href="" className='hover-link-effect'>Saylani Mass IT training (SMIT)</a> gaining expertise in building dynamic, responsive, and user-friendly applications that cater to modern digital needs.</p>

              <p>Currently pursuing a BS in Computer Science at <a href="" className='hover-link-effect'>Virtual University</a>, with a strong commitment to furthering my education and expanding my expertise in the field.</p>

              {/* counters */}
              <div className="list-sec">
              <ul class="professional-list">
              <li class="list-item">
                <h3 class="counterr" data-target="5+">5+</h3>
                <span>Years of<br /> Experiance</span>
              </li>

              <li class="list-item">
                <h3 class="counter" data-target="100"></h3>
                <span>Happy<br /> Customers</span>
              </li>

              <li class="list-item">
                <h3 class="counter" data-target="150"></h3>
                <span>Success<br /> Projects</span>
              </li>
            </ul>
              </div>

              <h2 className='about-name fw-bold mt-5 text-white'>Technologies</h2>
              <p>Here are a few technologies I've been working with recently:</p>
              <div className="container">
                <div className="row tech-main-sec">
                  <div className=" col-6">
                    <ul className='tect-list'>
                    <li className='list-1'> < img src={javascript} alt="" />JavaScript</li>
                      <li className='list-2'> < img src={html} alt="" />HTML</li>
                      <li className='list-3'>  < img src={css} alt="" />CSS3</li>
                      <li className='list-4' >  < img src={git} alt="" />Git</li>
                      <li className='list-5' > < img src={github} alt="" />Github</li>
                      <li className='list-6'>  < img src={sass} alt="" />Sass</li>
                      <li className='list-7'>  < img src={scss} alt="" />Scss</li>
                      <li className='list-8'>  < img src={bootstrap} alt="" />Bootstrap</li>
                      <li className='list-8'>  < img src={redux} alt="" />Redux</li>

                      {/* {tectData.map((item) => {
                        return createItem(item);
                      })} */}
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className='tect-list'>
                  <li className='list-1'> < img src={react} alt="" />React</li>
                  <li className='list-1'> < img src={expressjs} alt="" />Express-JS</li>
                  <li className='list-1'> < img src={mongodb} alt="" />Mongo-DB</li>
                  <li className='list-1'> < img src={antDesign} alt="" />Aunt-Design</li>
                  <li className='list-1'> < img src={reactNative} alt="" />React-Native</li>
                  <li className='list-1'> < img src={firebase} alt="" />Firebase</li>
                  <li className='list-1'> < img src={node} alt="" />Node-JS</li>
                  <li className='list-1'> < img src={restApi} alt="" />Rest-APIs</li>
                  <li className='list-1'> < img src={yup} alt="" />YUP Validation</li>

                  </ul>
                  </div>
                </div>
              </div>











              <div className="btn-sec fw-bold px-2 py-3 d-flex  align-items-center" >
            <a href={CV} target="_blank" rel="noopener noreferrer"> 
               <Button text="Download CV" className="fw-bold px-5" /> </a>
              <div className="social-icons mx-5"  id="about-social-Icons">
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
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default AboutPage