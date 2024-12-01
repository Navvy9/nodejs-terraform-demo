const http = require('http');

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENVIRONMENT || 'development';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello from Node.js! Environment: ${ENV}`);
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT} in ${ENV} mode.`);
});
