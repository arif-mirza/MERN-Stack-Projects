import React from 'react'
import "../styles/contactPage.css";
import Button from '../components/Button';

function ContactPage() {

  const email = "mirzaarif919@gamil.com";
  const subject = "Inquiry from Portfolio";
  const body = "Hello, I would like to discuss...";

  return (
    <>
    <div className="py-5">
    <div className="container py-5">
          <div className="row text-center">
            <div className="col-12">
              <h1 id="section-title-07">Get In Touch</h1>
              <h1 id="section-title-08">Get In Touch</h1>
            </div>
          </div>
          <div className="container center-div">

          <div className="row text-center  w-50 contact-info">
            <p>I'm currently in a search of new and better opportunities. My inbox is always open. Whether you wanna hire or just say hi, I'll try my best to get back to you!</p>
          </div>

          </div>


          <div className="row text-center ">
            <div className="col">
             <a 
             href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
             > <Button text= "Say Hello" /> </a>
            </div>
          </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ContactPage