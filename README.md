# The Future of Online Sales: A Feature-Packed RESTful API

## Introduction

This API is a feature-rich RESTful API, built using the MERN stack, that powers the e-commerce website.
It provides advanced authentication and authorization, secure payment processing with Stripe, and CRUD operations with MongoDB and Mongoose.
With features like filters, sorts, pagination, email sending, and file uploading, this API is designed to be fast, scalable, and user-friendly.
The API also implements robust security measures such as encryption, sanitization, and rate limiting to ensure sensitive information is protected.
It provides a set of endpoints that allow the front-end to interact with the database and perform various operations, such as retrieving products, managing user accounts, and processing payments.
The API is built using Node.js and Express and uses MongoDB for data storage.
This repository contains the source code for the API, along with detailed documentation and instructions for deployment

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
