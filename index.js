// Import the required libraries
const express = require("express");
const cors = require("cors");

// Create an Express app
const app = express();

// To Enable CORS 
app.use(cors());

// Defining the API endpoint
app.get("/", (req, res) => {
  const currentDatetime = new Date().toISOString(); 
  res.json({
    email: "Favourdozie@gmail.com", 
    current_datetime: currentDatetime,
    github_url: "https://github.com/Fhayz/HNG12-api", 
  });
});

// Server starter
const port = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});