const http = require('http');

// Create a simple web server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Aayush\n');
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
