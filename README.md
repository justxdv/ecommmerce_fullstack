# Full-Stack E-Commerce Project

Developed by Digvijay Sethi (digvijaysethi1@gmail.com), Samriddhi Puranik (samriddhi.18puranik@gmail.com), and Ritik Chourey (ritikchoureyd90@gmail.com)

This is a full-stack e-commerce project built using React.js for the frontend, Strapi for the headless CMS database, Stripe for payment processing, and Auth0 for authentication. This project is designed to provide an intuitive and seamless user experience for online shopping, featuring a responsive frontend and a robust backend for managing products, orders, and user data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)

## Features

- React.js frontend for a responsive and interactive user interface
- Strapi headless CMS for managing products, categories, and orders
- Stripe integration for secure payment processing
- Auth0 integration for user authentication and authorization

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes bundled with Node.js)
- [Git](https://git-scm.com/downloads) (optional, for cloning the repository)

## Getting Started

1. Clone the repository:

   git clone https://github.com/yourusername/fullstack-ecommerce.git
   Or download the ZIP file and extract it to a local folder.

 2. Open the project in Visual Studio Code.

 3. Install the required dependencies for both the API (Strapi) and the client (React.js) by running the following commands in the terminal:

  cd api
  
  npm install
  
  cd ../client
  
  npm install

 ## Running the Application

Open a terminal in Visual Studio Code and change the directory to api:

Copy code
cd api
Run the Strapi backend server:

Copy code
npm run develop
This will start the Strapi server at http://localhost:1337.

Open a new terminal in Visual Studio Code and change the directory to client:

Copy code
cd client
Run the React.js frontend:

Copy code
npm start
This will start the React app at http://localhost:3000.

Now, you can access the full-stack e-commerce application in your browser at http://localhost:3000.
