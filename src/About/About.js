import React from 'react';
import '../About/style.css'
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import Card from 'react-bootstrap/Card';
import avtMan1 from '../About/boy.png';
import avtMan2 from '../About/man.png';
import avtWoman1 from '../About/woman1.png';
import avtWoman2 from '../About/woman.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  
  return (

    <div>
      <NavigationBar/> 

      <div className='dataMember'>
        <h2>Capstone Grup C22-202</h2>
        <Row xs={1} md={4} className="g-4"> 
        <Col>
              <Card>
                <Card.Img variant="top" src={avtWoman1} />
                <Card.Body className='namaMember'>
                  <Card.Title>Hana Octavia T Malo </Card.Title>
                  <Card.Title>(M128Y0215)</Card.Title>
                </Card.Body>
              </Card>
              </Col>
        <Col>
              <Card>
                <Card.Img variant="top" src={avtMan1} />
                <Card.Body className='namaMember'>
                  <Card.Title>Rifqi Akyas Hifdzi Rahman</Card.Title>
                  <Card.Title>(M267X0598)</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
            
            <Col>
              <Card>
                <Card.Img variant="top" src={avtWoman2} />
                <Card.Body className='namaMember'>
                  <Card.Title>Fauziah Umri</Card.Title>
                  <Card.Title>(M128Y0212)</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={avtMan2} />
                <Card.Body className='namaMember'>
                  <Card.Title>Leonardo Davine Wowor</Card.Title>
                  <Card.Title>(M309X0813)</Card.Title>
                </Card.Body>
              </Card>
            </Col>

        </Row>
      </div>

      <Footer/>

    </div>

        
  );
}

export default About;
