import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import aboutPic from '../Images/about-pic.png'
import '../About/About.css'

const About = () => {
  
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "05" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    
    <div className='about' id='About'>
      <Container>
        <Row>
          <Col >
            <h1 className='about-title'>Welcome to my word !</h1>

            <h6 className='about-description '>In an ever-evolving digital landscape, innovation is key.<br />
              As a passionate web developer, I aim to push the boundaries of technology
              by crafting unique and engaging solutions.
              With expertise in cutting-edge technologies like React, Node.js, and MongoDB,
              I am committed to delivering exceptional user experiences that exceed expectations.
              Explore my achievements and discover how I can bring value to your project.</h6>
              <br/>
              <div className="flex-container">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="contentText">
                      {content.count}
                      <span className="plus">+</span>{" "}
                    </h3>
                    <span className="contentText">{content.text}</span>
                  </div>
                ))}
              </div>
          </Col>
          <img src={aboutPic} alt="" className='about-img' />
          <button className="btn-download">Download CV</button>

          <Col></Col>

        </Row>
      </Container>

    </div>
  )
}

export default About
