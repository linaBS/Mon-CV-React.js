
import React from "react";
import '../Contact/Contact.css'
import { Col, Container, Row } from "reactstrap";
import AdressIcon from '../Images/AdressIcon.png'
import EmailIcon from '../Images/EmailIcon.png'
//import EmailIcon from '../Images/Email.png'

const Contact = () => {
  return (
    <section id="contact" >
    <Container>
    <Row className="contact">

        <Col className="contact-col">
        <h1 className="contact-h1">Contact Us</h1>
        <p className="contact-p">if you have any work from me or any types of quries related to my Portfilio, <br/>
          can you send a message from here or me email. <br/>
          it's my pleasure to help you </p>
          <div>
        <img src={EmailIcon} alt="" className='EmailIcon' />
        <p>Bousalemlina@gmail.com</p>
        </div>
        <div>
        <img src={AdressIcon} alt="" className='AdressIcon' />
        <p>Sfax-Tunisia</p>
        </div>
        
        </Col>
        <Col>
      <div className="contact">
        <div className="contact-title">
          <h2 className="contact-h2">send us a message </h2>
          
        </div>
        <div >
          <form >
            <div className="contact-information">
              <div >
                <label >
                  Name
                </label>
                <input  id="name" type="text" placeholder="Your Name" />
              </div>
              <div >
                <label >
                  Email
                </label>
                <input  id="email" type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="contact-message">
              <label >
                Message
              </label>
              <textarea  id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="contact-button">
              <button type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </Col>
      
      </Row>
      </Container>
    </section>
  );
};

export default Contact;
