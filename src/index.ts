const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(bodyParser());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8080, () =>
  console.log("Server running on http://localhost:8080/")
);

const creds = process.env.MONGO_URI;
mongoose.Promise = Promise;
mongoose.connect(creds, {useNewUrlParser: true});
mongoose.connection.on("error", (error: Error) => console.log(error));

// mongo user: user
// mongo password: 59lhW9RFO3rbTdQq
