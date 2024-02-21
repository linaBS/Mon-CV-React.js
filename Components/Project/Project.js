
import React from "react";
import MedApp from '../Images/medicalAPP.png'
import Login from '../Images/SignUp.png'
import BookAppoinment from '../Images/bookAppoinmentAPP.png'
import Portfilio from '../Images/portfolio1.png'
import { Col, Container, Row } from "reactstrap";
import "../Project/Project.css"

const Project = () => {
    const projectData = [
        {
            img: MedApp,
            title: "Applcation web medical",
            description :
             "Our MERN medical application offers a complete platform for managing medical records, scheduling appointments and communicating between patients and doctors. our application aims to simplify and improve the experience of patients and doctors."},
          {
            img: Login,
            title: "Sign Up-Login page",
            description :
              " The registration page allows users to create a new account on our platform. The user's information is saved in our MongoDB database. The login page allows registered users to log in to their account. They must enter their email address and password to access their personal space on the platform." },
          {
            img: Portfilio,
            title: "Mon Portfilio",
            description :
              "My portfolio with React is a professional showcase of my skills and achievements in the field of development. It is designed to be intuitive, informative and aesthetically pleasing, providing visitors with a pleasant user experience while showcasing my talents and expertise in the field.",
          },
          {
            img: BookAppoinment,
            title: "BookAppoinment Web",
            description :
              "The appointment booking application developed with the MERN stack (MongoDB, Express.js, React.js and Node.js) is a web platform allowing users to schedule and manage their medical appointments and effectively practical.",
          },
         
    ] 
  return (
    <div className='project' id="project">
      <Container>
        <div className="project-title">

          <h2 className="project-h2"> My Projects</h2>


          <p className="project-p">Discover my projects, the fruit of my passion for IT development and technological innovation.</p>

        </div>
        <br/>
        <Row>
          {projectData.map((projects, index) => (
            <Col lg="3" md="6" key={index} className="mb-4"  >
              <div className="project-card">
                 <img src={projects.img} alt={projects.title} className="project-img" />
                <h3 className="project-title">{projects.title}</h3>
                <p className="project-description">{projects.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}


export default Project;
