import React from 'react'
import { useState } from 'react';
import "../styles/Experience.css";
import Smit from '../components/Smit';
import Lablab from '../components/Lablab';
import Accountant from '../components/Accountant';

function Experience() {
  const [activeComponent, setActiveComponent] = useState('one');
  return (
    <>
    <div className="py-5">
    <div className="container py-5">
        <div className="row text-center">
          <div className="col-12">
            <h1 id='section-title-03'>Experience</h1>
            <h1 id='section-title-04'>Experience</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-info">
              <h2 className='skill-name'>Where I've Worked</h2>
              <hr className='skill-line'/>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-2">
            <div className="skill-btns">
              <button className=" skill-btn active" onClick={() => setActiveComponent('one')}>SMIT</button>
              <button className=" skill-btn" onClick={() => setActiveComponent('two')}>Lablab.ai</button>
              <button className=" skill-btn" onClick={() => setActiveComponent('three')}>Accounts</button>
            </div>
          </div>
          <div className="col-12 col-md-10">
            {/* first */}
            {/* <Smit /> */}
            {activeComponent === 'one' && <Smit />}
            {/* 2nd */}
            {activeComponent === 'two' && <Lablab />}
            {/* 3rd */}
            {activeComponent === 'three' && <Accountant />}






          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Experience