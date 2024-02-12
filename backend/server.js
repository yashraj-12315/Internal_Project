const express = require("express");
const multer = require("multer");
const cors = require("cors");
const csvParser = require("csv-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000; // You can choose any port

app.use(cors());

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the folder where you want to store the CSV files
    const uploadFolder = path.join(__dirname, "uploads");
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    // Keep the original filename
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Define a route for handling file upload
app.post("/uploads", upload.single("csvFile"), (req, res) => {
  console.log("File upload route hit");
  console.log("Uploaded file:", req.file);

  // Handle file upload and log any errors
  try {
    // Your file upload logic here
    res.send("File uploaded!");
  } catch (error) {
    console.error("Error handling file upload:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
