# my-wallet-backend

This project is a Node.js API for an electronic wallet application using MongoDB. It provides a comprehensive set of features for user management and wallet operations, including user registration, login, authentication, and CRUD operations for managing wallet entries.

## Features

- User Registration: Create new user accounts with unique usernames and other details.
- User Login: Authenticate users with their credentials.
- Token-based Authentication: Secure endpoints using JWT tokens.
- Wallet CRUD Operations: Create, read, update, and delete wallet entries.

## Deployment
https://my-wallet-backend-vsot.onrender.com

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
    
<p>
    <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="40" alt="Node.js logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" height="40" alt="Express logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" height="40" alt="MongoDB logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Joi-336699?style=for-the-badge&logo=auth0&logoColor=white" height="40" alt="Joi logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Cors-FF6F91?style=for-the-badge&logo=cors&logoColor=white" height="40" alt="Cors logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/bcrypt-2A2A2A?style=for-the-badge&logo=bcyrpt&logoColor=white" height="40" alt="bcrypt logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/JSON_Web_Tokens-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" height="40" alt="JSON Web Tokens logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/HTTP_Status-5D5D5D?style=for-the-badge&logo=http-status&logoColor=white" height="40" alt="HTTP Status logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="40" alt="JavaScript logo" />
</p>

## Getting Started

Prerequisites
- Node.js
- MongoDB

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/truds99/my-wallet-backend.git
cd my-wallet-backend
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env file in the root directory and add your MongoDB URI, server port, and JWT secret.

```bash
DATABASE_URL=your_database_url
PORT=your_port_number
JWT_SECRET=your_JWT_secret
```

### 3. Start the server

```bash
npm start
```
## Usage
Use tools like Postman or cURL to interact with the API endpoints. Make sure your MongoDB instance is running and accessible.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.
