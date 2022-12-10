from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)
#model = tf.keras.models.load_model("C:/Sem 5/Studi Independen/Machine Learning/Tomato/deploy/model")
model = tf.keras.models.load_model("C:/Sem 5/Studi Independen/Front-End/TomatoCaptone/tomatofe2/API/deploy/model")
classNames = ['Bacterial_spot', 'Early_blight', 'Late_blight', 'Leaf_Mold', 'Septoria_leaf_spot', 'Spider_mites Two-spotted_spider_mite', 'Target_Spot', 'Tomato_Yellow_Leaf_Curl_Virus', 'Tomato_mosaic_virus', 'healthy', 'powdery_mildew']
classPrevent = ['Berdasarkan foto yang diunggah tanaman anda terdeteksi Bacterial_spot, ditandai dengan luka kecil berwarna kuning kehijauan pada daun muda pada tepian atau ujung daun. Untuk pengendaliannya, selalu pertimbangkan pendekatan terpadu dengan tindakanpencegahan bersama dengan perlakuan hayati jika tersedia.Bakterisida yang mengandung tembaga dapat digunakansebagai pelindung dan memberikan kontrol terhadapsebagian penyakit. Pemberiannya dilakukan pada tanda-tanda awal penyakit dan selanjutnya pada selang 10 hingga 14 hari ketika kondisi hangat dan lembab.', 
                'Pada daun tomat, dapat terjadi klorosis dan menyebabkan daun gugur sebelum waktunya. Cara pencegahannya seperti berikan drainase yang baik ke lahan karena tekanan air atau penyiraman yang berlebihan dapat menyebabkan keretakan tomat, periksa tanaman atau lahan Anda untuk tanda-tanda penyakit terutama selama periode berbunga, lakukan pemupukan tanaman dengan benar untuk meningkatkan daya tahan alami tanaman tomat', 
                'Bintik-bintik hijau kecoklatan muncul di tepi daun dan bagian atas daun tomat merupakan gejala dari late blight. Cara pencegahannya, tanaman tomat dan kentang jangan dibudidayakan bersama-sama, usahakan tanaman tetap kering dengan drainase dan ventilasi kulturyang baik, pemasangan naungan sederhana transparan dengan bahan terpal dan tiang kayu mungkin bisa membantu, pupuk yang mengandung silikat dapat meningkatkan daya tahan terhadap jamur, terutama pada tahap semai, hindari irigasi pada sore hari dan irigasi siram di permukaan tanah.',
                'Foto yang anda unggah menunjukan daun yang memiliki bercak berwarna kuning. silahkan buang dan musnahkan daun yang terdeteksi, dan pastikan lahan produksi bebas dari gulma yang rentan',
                 'Foto yang anda unggah menunjukan bahwa daun terinfeksi jamur Septoria lycopersici. Jamur ini hanya menginfeksi tanaman dari famili kentang dan tomat. Lakukan pengendalian dengan fungsida yang mengandung mankozeb, klorothalonil yang dapat mengendalikan daun tersebut, lalu semprotkan pada selang waktu 7 sampai 10 hari sepanjang musim terutama saat tahap pembungaan dan pembentukan buah tomat',
                 'Foto yang anda unggah menunjukan bahwa daun terinfeksi tungau laba-laba yang memamah biak menyebabkan terbentuknya bintik-bintik putih hingga kuning di permukaan atas daun. Cara menanggulanginya dengan menyiapkan bahan olahan yang terdiri dari biji rapa,selasih, kedelai dan minyak nimba untuk menyemprot daun secara menyeluruh dan mengurangi populasi tungau. Coba juga teh bawangputih, bubur jelatang atau larutan sabun insektisida untuk mengendalikan populasinya', 
                 'Foto yang anda unggah menunjukan pada permukaan sisi atas daun, muncul bercak-bercak kecil yang menyebar, berwarna hijau pucat atau kekuningan. Cara pencegahannya dengan melakukan penanaman lebih awal untuk mengurangi keparahanpenyakit, sesuaikan jarak tanam untuk meningkatkan sirkulasi udara dan mengurangi kelembaban di kanopi, pantau kehadiran penyakit dan tanaman perusak yang terinfeksi segera setelah terdeteksi, hindari pemupukan nitrogen yang berlebihan, sediakan sirkulasi udara di dalam rumah kaca', 
                 'Foto yang anda unggah menunjukan daun yang keriting dan menggulung dengan tepi kuning dan lebih pucat. Pencegahan virus ini dengan menyediakan tanah dengan drainase yang baik, pertahankan tanah dengan kelembaban yang cukup, hindari penggunaan pupuk yang berlebihan terutama nitrogen, berikan fosfor secara tepat', 
                 'Foto yang anda unggah menunjukan daun yang menunjukkan bercakhijau dan kuning atau pola mosaik. Dapat dicegah dengan melakukan pemanasan kering terhadap biji pada suhu 70 derajat Celcius selama 4 hari atau biji dapat direndam selama 15 menit dalam larutan 100 g/l trisodium fosfat kemudian dibilan dan dikeringkan. Selain itu jangan menanam di lahan yang sebelumnya sudah terindentifikasi oleh virus ini, bersihkan gulma di dalam dan di sekitar lahan',
                 'Foto yang anda unggah menunjukan daun tomat yang sehat, yang tidak memiliki jamur maupun virus dan akan menghasilkan buah tomat yang baik', 
                 'Foto yang anda unggah menunjukan daun tomat yang di sisi atasnya ada lapisan tepung berwarna keputihan dan menutupi daun. cara mencegahnya dengan menjadikan larutan susu sebagai fungsida alami dan aplikasikan larutan ini pada daun setiap hari kedua, tanam tanaman dengan jarak yang cukup untuk menjaga peredaran udara yang main kemudian amati lahan secara teratur untuk menilai munculnya penyakit atau hama']


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
    expPrevent = classPrevent[np.argmax(prediction[0])] # mengambail value predict yang terbesar dan menunjukan cara pencegahannya

    return{
        'class' : classPredict,
        'confidence' : float(confidence),
        'prevention' : expPrevent
    }


if __name__ =="__main__":
    uvicorn.run(app, host='localhost', port=8000)