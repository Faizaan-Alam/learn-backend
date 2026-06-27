const express = require('express');// import express module
const app = express();// create an instance of express
const port = 3000;// define the port number

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.send('About page');
});


// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
