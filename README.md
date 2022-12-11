# Project Brief
### Tomato Disease

**ID Grup : C22-202**

Nama Anggota:

1. M128Y0215 - Hana Octavia Trinida Malo
1. M309X0813 - Leonardo Davine Wowor
1. M267X0598 - Rifqi Akyas Hifdzi Rahman
1. M128Y0212 - Fauziah Umri

**Paket Pembelajaran**: Pengembang Machine Learning dan Front-End Web

**Tema yang dipilih**: Solusi terkait Kesehatan dan Kesejahteraan Lingkungan

**Judul Proyek:** Klasifikasi penyakit pada tanaman tomat dengan *Convolutional Neural Network* (CNN) dan penanggulangannya berbasis *Web*
#### **Backgrounder:**
Tomat merupakan tanaman hortikultura yang sangat mudah ditemukan di Indonesia. Buah tomat banyak digemari masyarakat untuk dikonsumsi karena mempunyai kandungan gizi yang baik untuk kesehatan, selain itu, tomat juga banyak dibudidaya karena harga tomat yang cukup stabil. Akan tetapi, terdapat kendala dalam membudidayakan tanaman tomat bagi para petani karena tomat rentan diserang penyakit, akibatnya para petani kesulitan dalam membedakan jenis-jenis penyakit yang terlihat mirip. Penyakit pada tanaman tomat biasa disebabkan oleh jamur, bakteri dan virus. Gejala yang ditimbulkan bisa dilihat dari perubahan bentuk dan warna daun. Oleh karena itu, dibutuhkan teknologi yang dapat membantu petani yang sulit untuk mengenali dan membedakan penyakit pada tanaman tomat, yang diidentifikasi menggunakan gambar daun tomat. Pembangunan aplikasi ini dilakukan untuk membantu petani dalam mengidentifikasi jenis-jenis penyakit pada daun tomat. 

Dalam proses pengerjaan, kami membuat project scope terlebih dahulu untuk membagi tugas dan waktu pengerjaan agar target tercapai sesuai dengan waktu yang sudah ditentukan.  Setelah itu dilanjutkan dengan mempersiapkan data latih dan validasi yang akan dipelajari oleh model dan *Pre-processing* data dengan *image augmentation.* Tahapan berikutnya kami membangun arsitektur model dengan *Convolutional Neural Network* (CNN), *Compile* dan latih model hingga mendapatkan akurasi yang terbaik. Dalam pelatihan model kami hanya berhasil mendapat akurasi sekitar 80%. Setelah itu, kami men-*deploy* model tersebut menggunakan framework FastAPI, dan menjadikan model kami sebagai API. Dalam pembuatan aplikasi website sendiri, kami menggunakan React.js agar mudah pembuatan website, kami juga menggunakan *framework* bootstrap untuk mempercantik halaman website kami.

Halaman *web* yang dibangun :

- Sebuah halaman yang berisi fitur upload foto daun tomat, tombol untuk upload fot dan tombol untuk *submit* foto
- Sebuah halaman yang dapat mengenali gambar dan memberitahukan jenis penyakit pada dan solusi yang dapat mengatasi penyakit pada tanaman tomat
- Sebuah halaman yang berisi info tentang tanaman tomat, seperti cara budidaya tomat.

Selama enam minggu pengerjaan, kami berhasil membuat aplikasi berbasis *web* yang dapat mengidentifikasi penyakit pada tanaman tomat dan memberikan cara penanggulangan terhadap penyakit tersebut. Kami juga mendesain aplikasi ini agar mudah digunakan, sehingga petani mendapatkan pengalaman yang baik ketika menggunakan aplikasi ini.

#### **Screenshots**
Halaman utama
![HalamanUtama](https://user-images.githubusercontent.com/88828572/206892494-2bfa6360-5307-4987-9251-254fdca2cfb9.jpg)

Halaman Predict
![HalamanPrediksi](https://user-images.githubusercontent.com/88828572/206892493-023a91f2-551f-4c99-981b-de48c8c156c4.jpg)
![HalamanPrediksi2](https://user-images.githubusercontent.com/88828572/206892488-32c47770-4ce5-4a11-a3eb-b8ec75906ac1.jpg)

Halaman Tomato
![HalamanTomato](https://user-images.githubusercontent.com/88828572/206892485-b1fcdb19-38df-4f78-a737-c4118a79c88a.jpg)

Halaman About
![HalamanAbout](https://user-images.githubusercontent.com/88828572/206892498-164edbc2-59e7-40cc-a058-5f9177c73b18.jpg)


Akurasi Model
![AkurasiModel](https://user-images.githubusercontent.com/88828572/206892500-7ee114bb-1c0f-422e-ace6-ddfcc9aa8488.jpg)


API
![API](https://user-images.githubusercontent.com/88828572/206892480-0ade3d42-8f17-42c6-9191-d6c329c05479.jpg)



# **Deployed Link:**
#### <https://bit.ly/3uFahX3>
#### **Github Repo Link:** 
#### <https://github.com/rifqiakyas/Capstone_2022>
#### **10-Min Video Presentation Link:** 
<https://youtu.be/odndlR0l3u0> 
#### **Slide Presentation Link:** 
<https://bit.ly/3FHRq4e>

#### **Other Resources Link:**
- #### **Library or external repository/API used:**


|**Library / API**|**Version**|**Link**|
| :-: | :-: | :-: |
|TensorFlow|<p>2.10.0</p><p></p>|<https://www.tensorflow.org/>|
|mathplotlib|<p>3.5.2</p><p></p>|<https://matplotlib.org/>|
|pandas|<p>1.4.4</p><p></p>|<https://pandas.pydata.org/>|
|FastAPI|0.88.0|<https://fastapi.tiangolo.com/>|
|uvicorn|0.20.0|<https://www.uvicorn.org/>|
|react-router-dom|6.4.5|<https://www.npmjs.com/package/react-router-dom>|
|react-bootstrap/Navbar|2.7.0|<https://react-bootstrap.netlify.app/components/navbar/#rb-docs-content> |
|react-bootstrap/carousel\_slider|2.7.0|<https://react-bootstrap.netlify.app/components/carousel/#rb-docs-content>[ ](https://pub.dev/packages/carousel_slider)|
|react-bootstrap/buttons|2.7.0|<https://react-bootstrap.netlify.app/components/buttons/#rb-docs-content> |
|react-bootstrap/cards|0.13.4|<https://react-bootstrap.netlify.app/components/cards/#rb-docs-content> |
|google\_fonts|2.0.0|<p><https://fonts.google.com/></p><p></p>|

- #### **Dataset Link : <https://www.kaggle.com/datasets/cookiefinder/tomato-disease-multiple-sources>**

- #### **User Guide**
Aplikasi dan API yang dibangun masih local
Link website : <http://localhost:3000>
API url : <http://localhost:3000>


