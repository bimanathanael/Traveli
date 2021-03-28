# Traveli

a Travel company profile's website with CMS using React Js and Node Js

List Pages:

- Home
- HowItWorks (Not Ready)
- MembersSupplier
- MembersWholesaler
- MembersReseller
- MembersListSupplier
- MembersListWholesaler
- TraveliKuy
- Promo
- Profile
- Newsletter (News And Updates)
- ContactUs

List Section:

For Home (Sorted From Top to Bottom):

- Hero
- Why Choose Traveli
  - Title
  - Description
- What We Provide
  - Title
  - Description
- Traveli Membership
  - Supplier
    - Header
    - Benefit
    - Condition
  - Wholesaler
    - Header
    - Benefit
    - Condition
  - Agency
    - Header
    - Benefit
    - Condition
  - Corporate
    - Header
    - Benefit
    - Condition
  - Personal Traveli
    - Header
    - Benefit
    - Condition
- Key Benefit
  - Title
  - Description
- Testimonials
  - Header
  - Job
  - Image
  - Name
  - Description

For How It Works (Not Ready).

For Members Supplier (Sorted From Top to Bottom):

- Hero
- What We Offer
  - Title
  - Description
- How Supplier Works
  - Title
  - Description
- Conditions
- Key Features For Supplier
  - Web Portal Management
  - Online Billing Document
  - Supporting Tools

For Members Wholesaler (Sorted From Top to Bottom):

- Hero
- What We Offer
  - Title
  - Description
- How Wholesaler Works
  - Title
  - Description
- Conditions
- Key Features For Wholesaler
  - Web Portal Management
  - Online Billing Document
  - Supporting Tools

For Members Reseller (Sorted From Top to Bottom):

- Hero
- What We Offer
  - Title
  - Description
- How Agency Or Sub Agent Works
  - Title
  - Description
- How Corporate Works
  - Title
  - Description
- Conditions
- Key Features For Reseller

  - Web Portal Management
  - Online Billing Document
  - Supporting Tools

For Members List Supplier

- Hero

For Members List Distributor

- Hero

For Traveli Kuy

- Hero
- Benefit For Petra
  - Title
  - Description
- Benefit For Customer
  - Title
  - Description
- How Petra Works
  - Title
  - Description
- How Corporate Works
  - Title
  - Description
- How Customer Works
  - Title
  - Description
- Conditions Petra
- Key Features For Petra
  - Web Portal
  - Online Report
  - Others

For Profile

- Hero
- About Us
  - Top
  - Bottom
  - Caption
- Visi Misi

For Contact Us

- Contact Information

## Heroku Link

```
https://pacific-hamlet-79377.herokuapp.com

```

## example for fetching data from url

- get Home data

```
https://pacific-hamlet-79377.herokuapp.com/id/Home/

```

- get MembersSupplier data

```
https://pacific-hamlet-79377.herokuapp.com/id/MembersSupplier/

```

- get Promo data

```
https://pacific-hamlet-79377.herokuapp.com/promo/

```

- get Promo Detail data

```
https://pacific-hamlet-79377.herokuapp.com/promo/1616310178330

```

## RESTful endpoints

### GET /indonesia

> Get all indonesia data

_URL_

```
https://pacific-hamlet-79377.herokuapp.com/id/
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": [
       {
            "ContactInformation": {
                "AdressProvince": "DKI Jakarta 12160",
                "Email": "info@traveli.co.id",
                "AdressStreet": "Jl. Adityawarman I No. 2, RT 6/RW 2 Melawai,",
                "AdressCity": "Kebayoran Baru, Jakarta Selatan,",
                "CompanyName": "PT. Traveli Caraka Nuswantara",
                "TeleponNumber": "021-71793669"
            }
        },
        {
            "WhyChooseTraveliDescription": {
                "Description2": "Dengan konsep cross border inventory, di Traveli para travel agent dapat langsung mengakses dan membeli maupun menjual langsung produk-produk kepariwisataan yang mereka inginkan",
                "Description3": "Bertumbuh bersama menjadi prinsip utama Traveli, sehingga tidak perlu biaya investasi maupun berbayar untuk bergabung menjadi member Traveli. Cukup daftarkan dan registrasi bisnis anda dengan langkah yang mudah",
                "Description1": "Dengan mendigitalisasi travel agent konvensional menjadi OTA, Traveli mampu menjawab fenomena disrupsi di industri pariwisata, memfasilitasi para penggiat bisnis pariwisata dengan platform digital yang modern dan terintegrasi"
            },
            ..........dst
        }]
}


```

### GET /indonesia/:pages

> Get all indonesia data, filtering by Pages

_URL_

```
https://pacific-hamlet-79377.herokuapp.com/en/:pages
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": {
        "Hero": {
            "Caption": "TOGETHER, WE GROW",
            "Title": "BERSAMA MENGEMBANGKAN BISNIS KEPARIWISATAAN SECARA DIGITAL",
            "Description": "Traveli adalah platform digital kepariwisataan yang menampilkan, mendistribusikan, dan menjual produk-produk wisata yang anda miliki dengan membangun relasi sinergis antar penggunanya mulai dari pemasok, penjual dan pembeli dalam satu sistem yang terintegrasi"
        },
        "KeyBenefitsDescription": {
            "Description3": "Di Traveli, anda tidak perlu repot-repot memikirkan berapa modal yang diperlukan untuk menjadi member. Cukup registrasi dan anda langsung dapat bertransaksi",
            "Description4": "Pada ekosistem plaform Traveli, kami menghubungkan anda langsung ke market yang berpotensial. Mulai dari penyedia produk hingga pembeli yang prospektif, semua dalam 1 tempat",
            "Description2": "Anda memiliki kebebasan untuk memakai domain dan logo anda sendiri pada website yang disediakan Traveli. Sehingga identitas brand anda bisa dikenal dengan mudah",
            "Description1": "Dengan sistem yang sudah online dan terintegrasi, anda bisa langsung menikmati hasil transaksi anda secara real-time. Kalau bisa langsung, buat apa menunggu?"
        },
        "KeyBenefitsTitle": {
            "Title3": "TANPA BIAYA DI MUKA ATAU INVESTASI APAPUN",
            "Title1": "PEMBAYARAN REAL-TIME",
            "Title2": "KUSTOMISASI WEBSITE SESUAI KEINGINAN ANDA",
            "Title4": "PERLUAS JARINGAN BISNIS ANDA"
        },

        .....
    }
}


```

### GET /english

> Get all english data

_URL_

```

https://pacific-hamlet-79377.herokuapp.com/en/

```

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```

same like GET indonesia data

```

### GET /english

> Get all english data

_URL_

```

https://pacific-hamlet-79377.herokuapp.com/en/

```

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```

same like GET indonesia data

```

### GET /english/:pages

> Get all english data filter by Pages

_URL_

```

https://pacific-hamlet-79377.herokuapp.com/en/:pages

```

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```

same like GET indonesia data filter by Pages

```

### GET /promo

> Get all promo data

_URL_

```
https://pacific-hamlet-79377.herokuapp.com/promo
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": [
        {
            "time": "21 Maret 2021",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/traveli-b39d1.appspot.com/o/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?alt=media&token=900d6265-9242-4fbd-aadd-f96f1d65d898",
            "title": "Test",
            "image_path": "sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg",
            "content": "<p>JAKARTA, KOMPAS.com – Secara umum, kondisi jalan di Indonesia baik di jalan pemukiman, perkotaan, antar kota dan bebas hambatan terdiri dari beberapa lajur. Biasanya, lajur kiri untuk kendaraan lambat dan kanan untuk yang ingin mendahului. Aturan ini pun sebenarnya ditulis pada UU Nomor 22 Tahun 2009 Pasal 108 tentang Jalur dan Lajur Lalu Lintas. Ayat ketiga mengatakan, sepeda motor, kendaraan bermotor yang kecepatannya lebih rendah, mobil barang, dan kendaraan tidak bermotor berada pada lajur kiri jalan. Sedangkan lajur kanan hanya boleh digunakan bagi kendaraan yang lebih cepat, akan belok kanan, mengubah arah atau mendahului kendaraan lain. Akan tetapi pada kenyataannya di jalan, ada saja yang berkendara dengan kecepatan lambat di lajur kanan.<br><br>Artikel ini telah tayang di <a href=\"https://www.kompas.com/\">Kompas.com</a> dengan judul \"Ini Bahayanya Berkendara Pelan di Lajur Kanan\", Klik untuk baca: <a href=\"https://otomotif.kompas.com/read/2021/03/21/140100015/ini-bahayanya-berkendara-pelan-di-lajur-kanan\">https://otomotif.kompas.com/read/2021/03/21/140100015/ini-bahayanya-berkendara-pelan-di-lajur-kanan</a>.<br>Penulis : Muhammad Fathan Radityasani<br>Editor : Azwar Ferdian<br><br>Download aplikasi <a href=\"https://www.kompas.com/\">Kompas.com</a> untuk akses berita lebih mudah dan cepat:<br>Android: <a href=\"https://bit.ly/3g85pkA\">https://bit.ly/3g85pkA</a><br>iOS: <a href=\"https://apple.co/3hXWJ0L\">https://apple.co/3hXWJ0L</a></p>",
            "timeInNumber": 1616310178330
        }
    ]
}


```

### GET /promo/:id

> Get detail from one promo

_URL_

```
https://pacific-hamlet-79377.herokuapp.com/promo/:id
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": {
        "content": "<p>JAKARTA, KOMPAS.com – Secara umum, kondisi jalan di Indonesia baik di jalan pemukiman, perkotaan, antar kota dan bebas hambatan terdiri dari beberapa lajur. Biasanya, lajur kiri untuk kendaraan lambat dan kanan untuk yang ingin mendahului. Aturan ini pun sebenarnya ditulis pada UU Nomor 22 Tahun 2009 Pasal 108 tentang Jalur dan Lajur Lalu Lintas. Ayat ketiga mengatakan, sepeda motor, kendaraan bermotor yang kecepatannya lebih rendah, mobil barang, dan kendaraan tidak bermotor berada pada lajur kiri jalan. Sedangkan lajur kanan hanya boleh digunakan bagi kendaraan yang lebih cepat, akan belok kanan, mengubah arah atau mendahului kendaraan lain. Akan tetapi pada kenyataannya di jalan, ada saja yang berkendara dengan kecepatan lambat di lajur kanan.<br><br>Artikel ini telah tayang di <a href=\"https://www.kompas.com/\">Kompas.com</a> dengan judul \"Ini Bahayanya Berkendara Pelan di Lajur Kanan\", Klik untuk baca: <a href=\"https://otomotif.kompas.com/read/2021/03/21/140100015/ini-bahayanya-berkendara-pelan-di-lajur-kanan\">https://otomotif.kompas.com/read/2021/03/21/140100015/ini-bahayanya-berkendara-pelan-di-lajur-kanan</a>.<br>Penulis : Muhammad Fathan Radityasani<br>Editor : Azwar Ferdian<br><br>Download aplikasi <a href=\"https://www.kompas.com/\">Kompas.com</a> untuk akses berita lebih mudah dan cepat:<br>Android: <a href=\"https://bit.ly/3g85pkA\">https://bit.ly/3g85pkA</a><br>iOS: <a href=\"https://apple.co/3hXWJ0L\">https://apple.co/3hXWJ0L</a></p>",
        "image_url": "https://firebasestorage.googleapis.com/v0/b/traveli-b39d1.appspot.com/o/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?alt=media&token=900d6265-9242-4fbd-aadd-f96f1d65d898",
        "timeInNumber": 1616310178330,
        "time": "21 Maret 2021",
        "title": "Test",
        "image_path": "sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"
    }
}


```

### GET /newsletter

> Get all news and updates data

_URL_

```
https://pacific-hamlet-79377.herokuapp.com/newsletter
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": [
        {
            "time": "21 Maret 2021",
            "timeInNumber": 1616303924638,
            "title": "Coba",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/traveli-b39d1.appspot.com/o/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?alt=media&token=e4204d03-59a0-4b8e-a9aa-b09925ca62cc",
            "content": "<p>KOMPAS.com - Beberapa hewan laut, termasuk di antaranya penyu hijau, hiu macan, dan anjing laut berbulu Antartika telah diamati berenang dengan pola yang misterius. Peneliti menyebut jika mahluk-mahluk tersebut berenang berputar-putar. Namun penyebab perilaku tersebut masih menjadi misteri. Seperti dikutip dari New Scientist, Jumat (19/3/2021) peneliti dari Universitas Tokyo di Jepang Tomoko Narazaki secara tak sengaja menemukan perilaku aneh itu saat mempelajari navigasi penyu hijau (Chelonia mydas) di lepas pantai Mohéli, salah satu pulau Komoro di Samudra Hindia, dan pulau Chichijima di Jepang di Samudera Pasifik. Baca juga: Ribuan Penyu Ditemukan Lumpuh di Lepas Pantai Texas, Apa Sebabnya? Narazaki telah melacak pergerakan penyu hijau ketika dipindahkan dari tempat berkembang biaknya. Data pelacakan kemudian menunjukkan, pergerakan penyu yang berputar-putar ketika kembali ke perairan pantai dari tempat mereka bersarang. Menurut peneliti, seekor penyu berenang dalam lingkaran besar sebanyak 76 kali dengan setiap putaran membutuhkan waktu 16 hingga 20 detik. Awalnya, Narazaki mengira bahwa penanda pelacakan pada penyu yang telah dipasang mungkin rusak. Penanda yang digunakan pada penyu tersebut memiliki resolusi spasial yang jauh lebih tinggi dibandingkan dengan kebanyakan pelacak GPS. Penanda tersebut dapat melacak pergerakan 3D hewan dan memperbaharui setiap detik dengan merekam informasi kedalaman, akselerasi, dan magnetis. Narazaki pun mengonfirmasi temuannya dengan rekannya yang menggunakan penanda pelacakan 3D yang sama dengan hewan lainnya. Ternyata ia dan rekannya menemukan, bahwa hewan yang berenang dengan pola lingkaran tak hanya penyu.<br><br>Artikel ini telah tayang di <a href=\"https://www.kompas.com/\">Kompas.com</a> dengan judul \"Ahli Temukan Beberapa Hewan Laut Berenang dengan Pola Misterius\", Klik untuk baca: <a href=\"https://www.kompas.com/sains/read/2021/03/21/120500023/ahli-temukan-beberapa-hewan-laut-berenang-dengan-pola-misterius\">https://www.kompas.com/sains/read/2021/03/21/120500023/ahli-temukan-beberapa-hewan-laut-berenang-dengan-pola-misterius</a>.<br>Penulis : Kontributor Sains, Monika Novena<br>Editor : Bestari Kumala Dewi<br><br>Download aplikasi <a href=\"https://www.kompas.com/\">Kompas.com</a> untuk akses berita lebih mudah dan cepat:<br>Android: <a href=\"https://bit.ly/3g85pkA\">https://bit.ly/3g85pkA</a><br>iOS: <a href=\"https://apple.co/3hXWJ0L\">https://apple.co/3hXWJ0L</a></p>",
            "image_path": "sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"
        }
    ]
}


```

### GET /newsletter/:id

> Get detail from one newsletter

_URL_

```
https://pacific-hamlet-79377.herokuapp.com/newsletter/:id
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": {
        "title": "Coba",
        "timeInNumber": 1616303924638,
        "image_path": "sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg",
        "image_url": "https://firebasestorage.googleapis.com/v0/b/traveli-b39d1.appspot.com/o/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?alt=media&token=e4204d03-59a0-4b8e-a9aa-b09925ca62cc",
        "content": "<p>KOMPAS.com - Beberapa hewan laut, termasuk di antaranya penyu hijau, hiu macan, dan anjing laut berbulu Antartika telah diamati berenang dengan pola yang misterius. Peneliti menyebut jika mahluk-mahluk tersebut berenang berputar-putar. Namun penyebab perilaku tersebut masih menjadi misteri. Seperti dikutip dari New Scientist, Jumat (19/3/2021) peneliti dari Universitas Tokyo di Jepang Tomoko Narazaki secara tak sengaja menemukan perilaku aneh itu saat mempelajari navigasi penyu hijau (Chelonia mydas) di lepas pantai Mohéli, salah satu pulau Komoro di Samudra Hindia, dan pulau Chichijima di Jepang di Samudera Pasifik. Baca juga: Ribuan Penyu Ditemukan Lumpuh di Lepas Pantai Texas, Apa Sebabnya? Narazaki telah melacak pergerakan penyu hijau ketika dipindahkan dari tempat berkembang biaknya. Data pelacakan kemudian menunjukkan, pergerakan penyu yang berputar-putar ketika kembali ke perairan pantai dari tempat mereka bersarang. Menurut peneliti, seekor penyu berenang dalam lingkaran besar sebanyak 76 kali dengan setiap putaran membutuhkan waktu 16 hingga 20 detik. Awalnya, Narazaki mengira bahwa penanda pelacakan pada penyu yang telah dipasang mungkin rusak. Penanda yang digunakan pada penyu tersebut memiliki resolusi spasial yang jauh lebih tinggi dibandingkan dengan kebanyakan pelacak GPS. Penanda tersebut dapat melacak pergerakan 3D hewan dan memperbaharui setiap detik dengan merekam informasi kedalaman, akselerasi, dan magnetis. Narazaki pun mengonfirmasi temuannya dengan rekannya yang menggunakan penanda pelacakan 3D yang sama dengan hewan lainnya. Ternyata ia dan rekannya menemukan, bahwa hewan yang berenang dengan pola lingkaran tak hanya penyu.<br><br>Artikel ini telah tayang di <a href=\"https://www.kompas.com/\">Kompas.com</a> dengan judul \"Ahli Temukan Beberapa Hewan Laut Berenang dengan Pola Misterius\", Klik untuk baca: <a href=\"https://www.kompas.com/sains/read/2021/03/21/120500023/ahli-temukan-beberapa-hewan-laut-berenang-dengan-pola-misterius\">https://www.kompas.com/sains/read/2021/03/21/120500023/ahli-temukan-beberapa-hewan-laut-berenang-dengan-pola-misterius</a>.<br>Penulis : Kontributor Sains, Monika Novena<br>Editor : Bestari Kumala Dewi<br><br>Download aplikasi <a href=\"https://www.kompas.com/\">Kompas.com</a> untuk akses berita lebih mudah dan cepat:<br>Android: <a href=\"https://bit.ly/3g85pkA\">https://bit.ly/3g85pkA</a><br>iOS: <a href=\"https://apple.co/3hXWJ0L\">https://apple.co/3hXWJ0L</a></p>",
        "time": "21 Maret 2021"
    }
}
}


```
