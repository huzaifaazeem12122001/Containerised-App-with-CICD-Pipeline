const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: "success", author: "Muhammad Huzaifa Azeem", message: "Hello from Node.js DevOps API!" }));
});
server.listen(3000, () => console.log('API running on port 3000'));
