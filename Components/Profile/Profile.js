import React from 'react';
import profilePic from '../Images/profile-pic.png'
import '../Profile/Profile.css'
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-scroll';
const Profile = () => {
  
  return (
<div id="profile">
    <div className={`profile `}>
      <Container>
        <Row>
          <Col>
            <div >

              <img src={profilePic} alt="" className='profile-img' />


            </div>
          </Col>

          <Col>

            <div >
              <h1> <span   style={{ color: '#230a61' }}>Hello !<br /></span>
              <span style={{ color: 'rgb(255, 255, 255)' }}>My Name is Lina Bousalem</span> </h1>
              <h3 style={{ color: 'rgba(57, 55, 55, 0.988)' }} >
                Fullstack Developer
              </h3>
              <Link to="contact">
              <button className="btn-primary mt-8">Contact Me</button>
              </Link>
<p  style={{ color: '#230a61' }}>Bousalemlina@gmail.com</p>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
   
    </div>
  );
};
export default Profile;
