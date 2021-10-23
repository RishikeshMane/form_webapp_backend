const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const dotenv = require('dotenv');
dotenv.config();
server.listen(process.env.PORT,console.log("Backend server started"))