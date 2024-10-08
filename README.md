<h1 align="center">Cinema-Booking</h1>

Movie ticket booking web application with MERN stack (MongoDB, Express, React, NodeJS) & Tailwind CSS

## Table of Contents
* [Technologies](#technologies)
* [Quick Tour](#quick-tour)
* [Guide](#guide)
* [Installation](#installation)

## Technologies
* React
* React Router Dom
* React Hook Form
* Tailwind CSS
* Vite
* NodeJS
* Mongoose
* Express
* MongoDB

## Quick Tour
<h2 align="center">Home Page 🎥</h2>
<p align="center">
    <img src="./images/Home-page.png" width="600">
</p>


<h2 align="center">Cinema Page 🏢</h2>
<p align="center">
    <img src="./images/Cinemas.png" width="600">
</p>

<h2 align="center">View Schedule 🕙</h2>
<p align="center">
    <img src="./images/Schedule-1.png" width="600">
</p>

<h2 align="center">Book Seats 💺</h2>
<p align="center">
    <img src="./images/Book-seats.png" width="600">
</p>

<h2 align="center">View Tickets 🎫</h2>
<p align="center">
    <img src="./images/Tickets.png" width="600">
</p>

<h2 align="center">Add a Movie 🍿</h2>
<p align="center">
    <img src="./images/Add-movie.png" width="600">
</p>

<h2 align="center">Search Showtimes 🔎</h2>
<p align="center">
    <img src="./images/Showtime.png" width="600">
</p>

<h2 align="center">Admin 🕵️</h2>
<p align="center">
    <img src="./images/Admin.png" width="600">
</p>

## Guide

### 🧩 Role / Feature

There are 3 roles on this website with corresponding permissions:

| Role  | Permisson / Feature |
|-------------|-------------|
|👀 Viewer (Not logged in)  | **1. View released showtimes by choosing from** <br> &emsp;- Movie in home page <br>  &emsp;- Cinema's theater in cinema page <br> &emsp;- Cinema's schedule in schedule page <br> **2. View released showtimes for today and the future** <br> **3. View seats for released showtimes on the showtime page**|
|👤 User   | **1. All Viewer permissions** <br> **2. Purchase tickets on the showtime page** <br> **3. View purchased tickets on the ticket page**|
|👑 Admin   | **1. All User permissions** <br> **2. View all showtimes for any date** <br> **3. Manage cinemas** <br> **4. Manage theaters** <br> &emsp;- View theater's row, column, seats information <br> **5. Manage showtimes** <br> &emsp;- Search & filter & sort showtimes <br> &emsp;- View details of booked seats <br> **6. Manage movies** <br> **7. Manage user & admin**|

### 👀 Viewer
Viewer have access to these pages for viewing released showtimes.

- Home page

- Cinema page

- Schedule page

- Showtime page

### 👤 User
User have all viewer permission. Including, the ability to purchase and view their own tickets

- Register / Login

- Showtime page / Purchase tickets

- Ticket page

### 👑 Admin
Admin have all permission.

<details>
    <summary>Create an admin account</summary><br>

1. Register a new user.
2. Access MongoDB and locate the user's data.
3. Update the user's role to `admin`.
4. The user will now become admin.
   
Note: After obtaining the first admin account, this user can assign admin roles to others using the User page.

</details>
    
- Home Page

- Cinema Page

- Schedule Page

- Showtime Page

- Movie Page

- Search Page

<details>
    <summary>User page</summary><br>

1. View usernames, email addresses, roles, and tickets of users.
2. Click the "View Tickets" button to see a user's purchased tickets.
3. Click the "Set Admin" or "Set User" button to change the user's role.
4. Click the "Delete" button to delete the account.

</details>

## Installation
1. Download the code
```
git clone https://github.com/himanshusyuni/CineView.git
cd CineView
```
2. Create .env file in /server
```
PORT=8080
DATABASE=<your MongoDB connection string URI>
JWT_SECRET=<any random JWT secret>
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```
3. Start server side
```
cd server
npm install
npm start
```
4. Start client side
```
cd client
npm install
npm run dev
```

### Contact
- For any queries or suggestions, feel free to reach out at: harshtayal2005@gmail.com or himanshusyuni123@gmail.com