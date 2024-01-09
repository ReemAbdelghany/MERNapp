# Workout Tracker App
![image](https://github.com/ReemAbdelghany/MERNapp/assets/127961912/7b91a010-e936-4203-8a79-66a1e993ccdd)

## Folder Structure

The app comprises the MERNAPP directory with assets, backend (including controllers, middleware, models, routes, etc.), and a frontend directory.

### Backend

- **controllers:** Manage workout app functionalities
- **middleware:** Handle request-related logic  
- **models:** Define Mongoose schemas for workout and user data
- **node_modules:** Installed backend packages and dependencies
- **routes:** Define crucial API endpoints
- **Configuration files:** .env, .gitignore, package-lock.json, package.json, server.js (entry point)

### Frontend

- **node_modules:** Installed frontend packages and dependencies
- **public:** Store static assets and HTML entry point
- **src:** Contains primary frontend source code (components, pages, services, etc.)
- **Configuration files:** .gitignore, package-lock.json, package.json, README.md

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)

## Features

- User authentication (sign-in, sign-up)
- Track workouts (add, update, delete records) 
- Data stored in MongoDB for personalized user experience

## How to Run

### Prerequisites

Ensure MongoDB is installed and configured on your system.

### Running the Application

#### Backend Server

# Navigate to backend directory
cd MERNAPP/backend

# Install dependencies  
npm install

# Start backend server
npm start

#### Frontend

# Navigate to frontend directory
cd MERNAPP/frontend 

# Install dependencies
npm install

# Start frontend development server 
npm start
