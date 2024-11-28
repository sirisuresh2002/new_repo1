const express = require('express'); // Import express

const app = express(); // Create an express app
const port = 3000; // Port number

// Create a simple GET route
app.get('/login', (req, res) => {
  res.send('Hello, World!'); // Send a message to the browser
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
