const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const port = process.env.PORT || 3000;

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); //REQ = PUT, POST parse URL req.params y lo convierte en un JSON en el body
server.use(bodyParser.json({ limit: "50mb" })); //REQ= PUT,POST coge los json y los trasnsforma en objetos de js
server.use(cookieParser()); //REQ= GET manda en req, la Cookie header...req.cookies
server.use(morgan("dev")); //consologuea los req
server.use((req, res, next) => {
  //middleware para dejar pasar las solicitudes de cualquiera
  res.header("Access-Control-Allow-Origin", `http://localhost:${port}`); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});



server.use("/", routes); //por aqui pasan todas las endpoint

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
module.exports = server;
