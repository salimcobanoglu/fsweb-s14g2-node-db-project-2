const express = require("express")
const router = require("./cars/cars-router");

const server = express();

// SİHRİNİZİ GÖSTERİN
server.use(express.json());//json isteklerin desteklenmesi için.

server.use("/api/cars",router);


module.exports = server
