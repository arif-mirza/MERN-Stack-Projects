import React from 'react'
import "../styles/Workpage.css";
import work1 from "../assets/images/work-1.png";
import Works_imgs from '../components/Works_imgs';



function work_1(props) {
  return (
    <>

<div className="container py-5">
        <div className="row">
          <div className="col-12">
           <div className="row">
            <div className="col-6">
              <div className="work1-info ms-5" style={{color: "#9fa2ab" }}>
                <p style={{color : '#4cc9f0'}} className='mb-0'>Featured Project</p>
                <h4 className='mb-4'>{props.title}</h4>
                <div className="work-box">
                  <p className='mb-0'>{props.description} </p>
                </div>
                <p className='tech'>{props.tech}
                </p>
                <div className="work-icon">
                <a href="#">
                    <i class="fab fa-github"></i>
                  
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 center-div">
              <div className="work-img">
              <img src={props.img} alt='workImages' />
               
               
              
              </div>
            </div>
           </div>
           
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default work_1