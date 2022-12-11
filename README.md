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
