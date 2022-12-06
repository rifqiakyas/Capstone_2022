import './App.css';
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import UploadImage from './components/upload';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Axios  from 'axios';


const axios = require("axios").default;

function App() {
  const [image, setImage] = useState(false);
  const [preview, setPreview] = useState();
  // const [data, setData] = useState();
  //let confidence = 0;
  console.log('image : ', image)

  const onSubmit = () => {

      const formData = new FormData();
      formData.append("file", image);

    Axios.post('http://localhost:8000/predict', formData, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('post success', res);
    })
    .catch(err => {
      console.log('err : ', err);
    })
    
  }

  const onImageUpload = (e) => {
    const file =  e.target.files[0];
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  // if (data) {
  //   confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  // }
  return (
    
    <div>
        <NavigationBar/>      
        <UploadImage onChange={(e) => onImageUpload(e)} img ={preview}/>
        <Button variant="outline-primary" onClick={onSubmit}>Predict</Button>{' '}
    <Footer/>
    </div>

  );
}

export default App;
