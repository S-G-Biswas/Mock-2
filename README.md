## Masai Library 
## Introduction
A backend for an basic online library system using node.js, express.js,mongoDB. this project aims to create a basic operational backend for an online library system. 

## Project type 
#### Back-End

## Deployed App
#### Frontend: https://dull-plum-hare-hose.cyclic.app/

## Directory Structure

### Masai Library/
  - config/
    - db.js 
  - middleware/
    - auth.js
  - models/
    - book.model.js
    - order.model.js
    - user.model.js 
  - routes/
    - book.routes.js
    - order.routes.js
    - user.routes.js
  - .env 
  - index.js

## Video walkthrough of the project
link: https://drive.google.com/drive/folders/1HjFAwWPvXQqvVPU_VTJni7MdicAE61dH?usp=sharing

## Features
- User can register and login to using their credentials.
- User can buy books from a wide varieties.
- User can explore wide varieties of books by there categories.
- admin can add, edit, update and delete the books details.
- Authentication is there so some routes can only be accessible by admin.
- password encryption features are available.


## Installation and Getting Started

- bash
- npm install
- node index.js

## Credentials
 email: sgb@gmail.com
 password: sgb

## API Endpoints

### POST:
 #### /api/register
 This endpoint will allow customers to register. Hash the password on store.
 #### /api/login
 This endpoint will allow customers to login. Return a JWT token on login.
 #### /api/order
 This endpoint will allow the customer to place an order for a list of books. (Protected Route)
### GET:
  #### /api/books
  This endpoint will return a list of all available books.
  #### /api/books/:id
  This endpoint will return the details of a specific book identified by its ID.
  #### /api/books?category=fiction
  This endpoint will give only those books whose category is fiction.
  #### /api/books?author=corey&category=fiction
  This endpoint will give only those books whose author is corey and the category is fiction.
  #### /api/books
  This endpoint will allow admin to add new books to the system. (Protected Route)
  #### /api/orders
  This endpoint will allow admin to view all the orders placed so far with the user and book details. Populate both user and book data, and not just id’s. (Protected Route)
### PUT/PATCH:
  #### /api/books/:id
  This endpoint will allow admin to update the details of a specific book identified by its ID. (Protected Route)
### DELETE: 
 #### /api/books/:id
 This endpoint should allow admin to delete a specific book identified by its ID. (Protected Route)

## Technology Stack
- Node.js
- Express.js
- MongoDB
- Jsonwebtoken












