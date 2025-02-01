const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Route for homepage
app.get("/", (req, res) => {
  res.send("Hello, Node.js Server is running on Render!");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});