# User Management App

## Description

This project is a User Management Application that consists of a dashboard with two tabs: User Details and Account Creation.

### User Details Tab
- Displays user information including username, email, phone, and creation date.
- Features a search bar allowing users to search for specific users using username, email, or phone.
- Provides functionalities to update and delete users.
- Offers a report generation button for selected users.

### Account Creation Tab
- Contains a form for adding new users with fields for username, email, and phone.
- Implements field validation:
  - Username must be below 15 characters.
  - Email follows a regex validation.
  - Phone number must be 10 digits.
- Saves user details into a MongoDB database after ensuring no field is empty.

## Tools Used

The project is built using:
- React.js for the frontend
- Tailwind CSS for styling
- MongoDB for the database

## How to Run the Project Locally

1. Clone this repository to your local machine.
2. Install required modules:

### For Server

cd ./client/server
npm install
npm start

### For Client

cd ./client
npm install
npm start

## Note : 
1. Before running, ensure you have MongoDB installed and running locally. Check for the MONGO_URI in the local machine, create a database named "user_management_db" with a collection named "users".
Once the installations and configurations are completed, execute the project.

Now, the application is ready to use! Open your web browser and access the application.
