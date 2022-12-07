import Form from 'react-bootstrap/Form';
import './style.css'


const UploadImage = ({img, ...rest}) =>  {
       
  return (

    <div className='upload'>
      {img && <img className='preview' src={img} alt='preview' />}
      <Form.Group controlId="formFile" className="form">
        <Form.Label>Masukan Gambar Daun Tomat</Form.Label>
        <Form.Control type="file" {...rest} />
      </Form.Group>
      
    </div>
  );
}


export default UploadImage;