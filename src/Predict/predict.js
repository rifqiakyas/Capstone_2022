import NavigationBar from '../components/navbar';
import UploadImage from './upload';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import Axios  from 'axios';
import Table from 'react-bootstrap/Table';

function Predict() {
  const [image, setImage] = useState(false);
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  let confidence = 0;
  

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

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
    
    <div className='Container'>
        <NavigationBar/>      
        
        <UploadImage onChange={(e) => onImageUpload(e)} img ={preview}/>
        
        <Button variant="outline-primary" onClick={onSubmit} >Predict</Button>{' '}
        
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
        <tr>
          <td>Prevention</td>
          <td>{data.prevention}</td>
        </tr>

      </tbody>
    </Table>}
    
    </div>

  );
}

export default Predict;
