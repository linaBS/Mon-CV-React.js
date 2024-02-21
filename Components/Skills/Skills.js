import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../Skills/Skills.css'

const serviceData = [
  {
    title: 'React',
    description: 'I have extensive experience in developing web applications using React.js. I am proficient in creating reusable components, managing state, and handling data flow efficiently'
  },
  {
    title: 'Node.js',
    description: 'I am skilled in backend development using Node.js. I have experience in building RESTful APIs, implementing authentication, and integrating with databases',
  },
  {
    title: 'MongoDB',
    description:
      'I have expertise in MongoDB, a NoSQL database. I am proficient in designing schemas, performing CRUD operations, and optimizing database performance.'
  },
  {
    title: 'Angular',
    description:
      'I have knowledge of Angular framework and have worked on projects involving Angular. I am capable of building scalable and maintainable single-page applications.'
  },

];

const Skills = () => {
  return (
    <div id="skills">
    <div className='skills'>
      <Container>
        <div className="skills-title">

          <h2 className="skills-h2"> My Skills</h2>


          <p className="skills-p">My knowledge</p>

        </div>
        <br/>
        <Row>
          {serviceData.map((service, index) => (
            <Col lg="3" md="6" key={index} className="mb-4"  >
              <div className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Skills




