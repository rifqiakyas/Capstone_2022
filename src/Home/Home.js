import React from 'react';
import '../Home/style.css'
import bgTomato1 from '../Home/tomato3.jpg';
import bgTomato2 from '../Home/tomato2.jpg';
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  
  return (

    <div>
    <NavigationBar/>  
   
    <Carousel>
      <Carousel.Item className ='item'interval={1000}>
        <img
          className="d-block w-100 h-30"
          src={bgTomato1}
          alt="First slide"
        />
        <Carousel.Caption className ='caption'>
          <h3>Tomato Disease Classification</h3>
          <p>Deteksi dini penyakit yang menyerang tanaman tomat anda</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className ='item' interval={500}>
        <img
          className="d-block w-100 h-30"
          src={bgTomato2}
          alt="Second slide"
        />
        <Carousel.Caption className ='caption'>
          <h3>Tomato Disease Classification</h3>
          <p>Deteksi dini penyakit yang menyerang tanaman tomat anda</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    <Footer/>
  
    

    </div>

        
  );
}

export default Home;
