# The Future of Online Sales: A Feature-Packed RESTful API

## Introduction

This API is a feature-rich RESTful API, built using the MERN stack, that powers the e-commerce website.
It provides advanced authentication and authorization, secure payment processing with Stripe, and CRUD operations with MongoDB and Mongoose.
With features like filters, sorts, pagination, email sending, and file uploading, this API is designed to be fast, scalable, and user-friendly.
The API also implements robust security measures such as encryption, sanitization, and rate limiting to ensure sensitive information is protected.
It provides a set of endpoints that allow the front-end to interact with the database and perform various operations, such as retrieving products, managing user accounts, and processing payments.
The API is built using Node.js and Express and uses MongoDB for data storage.

This repository contains the source code for the API, along with detailed documentation and instructions for deployment

## Getting Started

The following instructions will help you set up and run the e-commerce API project on your local machine.

1. Clone the repository: Clone the repository to your local machine using the following command:

`git clone https://github.com/nasim67reja/e-commerce.api.git`

2. Install dependencies: Navigate to the project directory and install the required dependencies using the following command:

`npm install`

3. Set up the environment: Create a `.env` file in the root of the project and define the necessary environment variables. An example of the required environment variables can be found in the `.env.example` file.

4. Start the server: Start the server using the following command:
   `npm start` or `npm run dev`

5. Test the API: The API should now be running on http://localhost:8000. You can test the API using a tool such as Postman.

With these steps, you should be able to get the e-commerce API project up and running on your local machine. If you run into any issues, please contact with me through `nasimreja68@gmail.com`.

## How to use the API

### Examples

The following examples demonstrate how to use the e-commerce API.

### Products

- Get All Products

`Get api/v1/products`

Retrieves a list of all products available in the e-commerce store.

- Get Product by ID

`GET api/v1/products/:id`

Retrieves the details of a single product by its ID.

Response format :

```json
{
  "status": "success",
  "data": {
    "data": {
      "_id": "62fca17afbb202a6698846b4",
      "name": "XBox Console",
      "categories": "Electronics",
      "ratingsAverage": 0,
      "ratingsQuantity": 0,
      "price": 729,
      "priceDiscount": 0,
      "summary": "Rand McNally Vehicle Link ELD (Electronic Logging Device), FMCSA Compliant, 9-Pin J1939, Android Only, Subscription Required (VL21)",
      "description": "SIMPLE TO INSTALL - Vehicle Link ELD has a standard 9-pin (J1939) ECM connector. An adapter is required for OBD-II or 6-pin ECM ports.",
      "images": ["Xbox1.webp", "Xbox2.webp"],
      "__v": 0,
      "sell": 1,
      "reviews": [],
      "id": "62fca17afbb202a6698846b4"
    }
  }
}
```

- create product

`POST api/v1/products`

The request body should like

```json
{
  "name": "Test Product 4",
  "categories": "Home",
  "price": 40.0,
  "summary": "Rand McNally Vehicle Link ELD (Electronic Logging Device), FMCSA Compliant, 9-Pin J1939, Android Only, Subscription Required (VL21)",
  "description": "SIMPLE TO INSTALL - Vehicle Link ELD has a standard 9-pin (J1939) ECM connector. An adapter is required for OBD-II or 6-pin ECM ports.",
  "priceDiscount": 20,
  "images": [
    "http://127.0.0.1:8000/Products/Home/light1.jpg",
    "http://127.0.0.1:8000/Products/Home/light2.jpg"
  ]
}
```

- Update Product

`PATCH api/v1/products/:id`

The request body should like

```json
{
  "images": [
    "http://127.0.0.1:8000/Products/Man/menshort2.webp",
    "http://127.0.0.1:8000/Products/Man/menshort1.webp"
  ]
}
```

- Delete product

  `DELETE api/v1/products/:id`

  The product will be deleted from db.

  **_Check the API Docs_**

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- jsonwebtoken (for authentication)
- stripe (for payment)
- multer (for file upload)
- nodemailer
- cors,cookie-parser,dotenv,sharp

  **check the package.json file**

## Get all the product

- Make a get request in this `http://127.0.0.1:8000/api/v1/products` route for getting all the products

## Get a single Product

- Put the product id after the previous route like `http://127.0.0.1:8000/api/v1/products/62fb44698e3c2935a1730326` Note that here `62fb44698e3c2935a1730326` refers to the product id which ones you want to get. and make a get request

## Update a Product

- the route is same as get a single product route but only differnce is you have to make a patch request with update content in body

## Delete a Product

- It's also same route like update or get a single product. put the id after get all product route and make a delete request

## Filtering,Sorting,Limiting,Pagination

- All the features(filtering,sorting,limiting,pagination) are available.
- Filtering => `http://127.0.0.1:8000/api/v1/products?categories=Man`
- Sorting => `http://127.0.0.1:8000/api/v1/products?sort=price`
- Limiting => `http://127.0.0.1:8000/api/v1/products?fields=name,price,ratingsAverage`
- Pagination => `http://127.0.0.1:8000/api/v1/products?page=1&limit=2`

## alias Route

### Top Rated

- to get top 10 rated products hit a `get` request in this route `http://127.0.0.1:8000/api/v1/products/top-10-rated`

## Authentication

### Sign Up Route

- `http://127.0.0.1:8000/api/v1/users/signup` hit a post request with this `name email password passwordConfirm passwordChangedAt` property

### Log In

- `http://127.0.0.1:8000/api/v1/users/login` hit a post request with `email & password` property

### Forgot password

- `http://127.0.0.1:8000/api/v1/users/forgotPassword` Hit this route a post request with your email

### reset password

- `http://127.0.0.1:8000/api/v1/users/resetPassword/238493824` Hit this route a patch request with your new password and confirm password.
  **_note that here 238493824 is the resettoken_**

### Update Current User password

- `http://127.0.0.1:8000/api/v1/users/updateMyPassword` hit a patch request on this route with `passwordCurrent password and passwordConfirm` data

## User Data

### Get All User

- For getting all the user hit a get request in this `http://127.0.0.1:8000/api/v1/users` route
