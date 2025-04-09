# User Data Capture Full-Stack Web App

This project is a full-stack web application that captures user data via a form and stores it in a MySQL database. The app is built using **Node.js**, **Express**, and **MySQL** for the backend and **HTML**, **CSS**, and **JavaScript** for the frontend. The application is deployed on **Vercel** as a serverless application.

## Features
- **User Form**: Captures user data like Name, Email, Phone, and Age.
- **Backend (API)**: Node.js with Express used to handle API requests and store data in a MySQL database.
- **Database**: MySQL database to store user data.

## Table of Contents
1. [Technologies](#technologies)
2. [Setup](#setup)
3. [Project Structure](#project-structure)
4. [Database Setup](#database-setup)
5. [Backend Setup](#backend-setup)
6. [Frontend Setup](#frontend-setup)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

## Technologies
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for handling HTTP requests and routing.
- **MySQL**: Relational database for storing user data.
- **HTML/CSS/JavaScript**: Frontend technologies for building the user interface.

## Setup

### Prerequisites
1. **Node.js** installed (download from [nodejs.org](https://nodejs.org/)).
2. **MySQL** installed locally or use an external database service like **Railway** or **PlanetScale**.

### Step 1: Clone the Repository
Clone the repository to your local machine.

Step 2: Install Dependencies
Install the required Node.js dependencies by running the following command in the project directory:

bash
Copy
Edit
npm install
Step 3: Configure Database Connection
In the backend (api/users.js), you need to set up the MySQL connection. You can either:

Use a local MySQL database or

Set up an external MySQL service like Railway or PlanetScale.

Example for using an external MySQL database:

js
Copy
Edit
// api/users.js
const db = mysql.createPool({
    host: 'your-db-host',  // Replace with your DB host from Railway or PlanetScale
    user: 'your-db-user',  // Replace with your DB username
    password: 'your-db-password',  // Replace with your DB password
    database: 'user_data',  // The database name
});
Step 4: Run Locally
Run the application locally for testing:

bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser to see the form in action.

```bash
git clone https://github.com/DMacharia-887/Full-stack-App.git
cd Full-stack-App

