const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();


// db
// mongodb+srv://nikita:<password>@cluster0.iebrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://nikita:<password>@cluster0.iebrs.mongodb.net/test

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.iebrs.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

/* add below line to server/.env file to connect to studio3t
// DATABASE='mongodb://localhost:27017/marvellona'
 // db to connect to studio3t
 mongoose
   .connect(process.env.DATABASE, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false,
     useUnifiedTopology: true,
   })
   .then(() => console.log("DB CONNECTED"))
   .catch((err) => console.log("DB CONNECTION ERR", err));
*/


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
