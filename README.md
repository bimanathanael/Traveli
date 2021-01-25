# Travelio

a Travel company profile's website with CMS using React Js and Node Js

List Pages:

- Distributor
- Supplier
- Solution
- Company

List Section:

For Distributor:

- Benefit
- Digital
- Features1
- Features2
- Hero
- Solution
- Testimonials
- Work

For Supplier:

- Benefit
- Digital
- Features
- Hero
- Solution
- Testimonials
- Work

For Solutions:

- Hero
- Menu1
- Menu2
- Menu3
- Menu4
- Menu5

## RESTful endpoints

### GET /english

> Get all english data

_URL_

```
http://localhost:3000/en/
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
            "Features1GeneratorDescription2": "Filter untuk mencari produk yang sesuai dengan preferensi anda",
            "WorkStep5Subtitle": "lorem dolor",
            "Features2AccountingTitle1": "Billing Document",
            "Features2AccountingTitle2": "Deposit Status",
            "WorkStep4Title": "Lengkapi produk",
            "Features1GeneratorDescription1": "Memudahkan anda untuk memilih dan menyimpan produk yang ingin dibeli",
            "WorkStep4Subtitle": "lorem dolor",
            "SolutionDescription2": "lorom dolor",
            "WorkTitle": "title",
            "WorkStep3Title": "Unggah produk",
            "Features1GeneratorTitle1": "Cart Shopping",
            "SolutionDescription3": "lorem dolor",
            "SolutionMainSubtitle": "lorem dolor",
            "Features1GeneratorMainTitle": "Pakesuka Generator",
            "HeroDevice3": "Transaksi dan akses produk antar penyedia lebih mudah dengan Shopping Cart",
            "SolutionSubTitile3": "Penginapan dan Akomodasi",
            "WorkStep6Subtitle": "lorem dolor",
            "WorkStep1Subtitle": "lorem dolor",
            "TestimonialsName2": "Kevin Noboa",
            ..........]
        }
}


```

### GET /english/:pages

> Get all english data, filtering by Pages

_URL_

```
http://localhost:3000/en/:pages
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
        "BenefitSubtitle1": "lorem dolor",
        "BenefitSubtitle2": "lorem dolor",
        "BenefitSubtitle3": "lorem dolor",
        "BenefitTitle1": "Perluas jaringan penjualan",
        "BenefitTitle2": "Pengaturan secara mudah",
        "BenefitTitle3": "Pengaturan secara mudah",
        "DigitalSubtitle1": "Platform Traveli diimplementasikan pada wabsite pengguna dan telat disupport dalam format mobile apps (android dan iOs) kami akan membantu proses registrasi dan aktivasi pada play store, google store, ataupun Apple store",
            ..........]
        }
}


```

### GET /english/:pages/:section

> Get all english data, filtering by Pages and by Section

_URL_

```
http://localhost:3000/en/:pages/:section
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
        "HeroDevice1": "Modifikasi paket Travel sesuai dengan keinginan anda dengan Tour Generator",
        "HeroDevice2": "Pembayaran tidak perlu menunggu lama karena semua bersistem online dan Real-Time Payment",
        "HeroDevice3": "Transaksi dan akses produk antar penyedia lebih mudah dengan Shopping Cart",
        "HeroSubtitle": "Traveli adalah platform digital kepariwisataan yang menampilkan, mendistribusikan, dan menjual produk-produk wisata yang anda miliki dalam suatu sistem yang terintegrasi",
        "HeroTitle": "Transformasi Digital Bisnis Kepariwisataan"
    }
}


```

### GET /indonesia

> Get all indonesia data

_URL_

```

http://localhost:3000/id/

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

same like GET english data

```

```

### GET /indonesia

> Get all indonesia data

_URL_

```

http://localhost:3000/id/

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

same like GET english data

```
### GET /indonesia

> Get all indonesia data

_URL_

```

http://localhost:3000/id/

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

same like GET english data

```

```

### GET /indonesia/:pages

> Get all indonesia data filter by Pages

_URL_

```

http://localhost:3000/id/:pages

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

same like GET english data filter by Pages

```

### GET /indonesia/:pages/:section

> Get all indonesia data filter by Pages and section

_URL_

```

http://localhost:3000/id/:pages/:section

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

same like GET english data filter by Pages and by Section

```
