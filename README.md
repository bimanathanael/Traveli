# Traveli

a Travel company profile's website with CMS using React Js and Node Js

List Pages:

- Home
- How It Works (Not Ready)
- Members Supplier
- Members Wholesaler
- Members Reseller
- Members List Supplier (Not Ready)
- Members List Distributor (Not Ready)
- Traveli Kuy
- Promo (Not Ready)
- Profile
- News and Updates (Not Ready)
- Contact Us

List Section:

For Home (Sorted From Top to Bottom):

- Home
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
- Our Partners
- Testimonials
  - Header
  - Job
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

For Members List Supplier (Not Ready)

For Members List Distributor (Not Ready)

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
- Visi Misi
- Our Team
  - Header
  - Name
  - Job Title
  - Profil Picture
  - Description Top
  - Description Bottom

For Contact Us

- Contact Information

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
            "TestimonialsName": {
                "Name2": "Kevin Noboa",
                "Name1": "Nout Goldstein"
            },
            "TraveliMembershipAgencyCondition": {
                "Condition1": "Comply with all terms and conditions determined by the parent",
                "Condition2": "Agree with Traveli's application of merchant fees",
                "Condition3": "Manages activities of the website independently"
            },
            "TraveliMembershipSupplierCondition": {
                "Condition3": "Manages activities of the website independently",
                "Condition1": "Has credentials for tourism products",
                "Condition2": "Agree with Traveli's application of merchant fees"
            },
            "KeyBenefitsTitle": {
                "Title3": "GROW YOUR INVENTORY",
                "Title1": "ZERO INITIAL FEES AND INVESMENT",
                "Title2": "GET YOUR OWN WEBSITE",
                "Title4": "EXPAND SELLING CHANNELS"
            },
            ..........dst
        }]
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
    "message": {
        "Hero": {
            "Title": "DIGITALLY TRANSFORM YOUR TRAVEL AND TOURISM BUSINESS s",
            "Description": "Traveli is digital tourism platform where you can expands and sells your travel products. By building synergic relationships between seller and buyer in one integrated system"
        },
        "KeyBenefitsDescription": {
            "Description2": "You can modify your business assest easily in short time. Everything in Traveli is meant to boost your business productivity",
            "Description3": "Jangkau pasar yang lebih luas secara online. Sehingga potensi penjualan product dan keuntungan kamu otomatis akan meningkat",
            "Description4": "Jangkau pasar yang lebih luas secara online. Sehingga potensi penjualan product dan keuntungan kamu otomatis akan meningkat",
            "Description1": "Reach a wider market with going online. Your product potential and your transaction will automatic increase"
        },
        "KeyBenefitsTitle": {
            "Title3": "GROW YOUR INVENTORY",
            "Title1": "ZERO INITIAL FEES AND INVESMENT",
            "Title4": "EXPAND SELLING CHANNELS",
            "Title2": "GET YOUR OWN WEBSITE"
        },
        .....
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
        "Title": "DIGITALLY TRANSFORM YOUR TRAVEL AND TOURISM BUSINESS s",
        "Description": "Traveli is digital tourism platform where you can expands and sells your travel products. By building synergic relationships between seller and buyer in one integrated system"
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
