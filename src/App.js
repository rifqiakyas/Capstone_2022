import './App.css';
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import UploadImage from './components/upload';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import Axios  from 'axios';
import Table from 'react-bootstrap/Table';



function App() {
  const [image, setImage] = useState(false);
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  let confidence = 0;
  

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

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
      setData(res.data)
      
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


  return (
    
    <div>
        <NavigationBar/>      
        <UploadImage onChange={(e) => onImageUpload(e)} img ={preview}/>
        <Button variant="outline-primary" onClick={onSubmit}>Predict</Button>{' '}
        {data &&
      <Table striped bordered hover>

      <tbody>
        <tr>
          <td>Disease</td>
          <td>{data.class}</td>

        </tr>
        <tr>
          <td>Confidence</td>
          <td>{confidence}%</td>
        </tr>

      </tbody>
    </Table>}
    
    <Footer/>
    </div>

  );
}

export default App;
