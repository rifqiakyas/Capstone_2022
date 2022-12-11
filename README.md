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

![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.001.png)


Halaman Predict

![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.002.png)

![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.003.png)

Halaman Tomato

![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.004.png)

Halaman About![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.005.png)

Akurasi Model

![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.006.png)












API

![](Aspose.Words.036d7826-fc2d-42fd-97d3-ac8d3e5854d4.007.png)
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

- #### **Academic Paper Link:**
