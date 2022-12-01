from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

model = tf.keras.models.load_model("C:/Sem 5/Studi Independen/Machine Learning/Tomato/deploy/model")
classNames = ['Bacterial_spot', 'Early_blight', 'Late_blight', 'Leaf_Mold', 'Septoria_leaf_spot', 'Spider_mites Two-spotted_spider_mite', 'Target_Spot', 'Tomato_Yellow_Leaf_Curl_Virus', 'Tomato_mosaic_virus', 'healthy', 'powdery_mildew']

@app.get("/ping")
async def ping():
    return "helloooooooo"

#  funtion untuk convert file foto ke numpy array
def readFile(data) -> np.ndarray:
   img = np.array(Image.open(BytesIO(data)))
   return img

@app.post("/predict")
async def predict(
    file: UploadFile = File(...) # agar bisa mengupload file

):
    # convert file to numpy array agar bisa mempredeksi
    image = readFile(await file.read())

    imgBatch = np.expand_dims(image,0) #mengubah array 1D jadi 2D
    prediction = model.predict(imgBatch)
    classPredict = classNames[np.argmax(prediction[0])] # mengambail value predict yang terbesar dan menunjukan nama classnya
    confidence = np.max(prediction[0])

    return{
        'class' : classPredict,
        'confidence' : float(confidence)
    }


if __name__ =="__main__":
    uvicorn.run(app, host='localhost', port=8000)