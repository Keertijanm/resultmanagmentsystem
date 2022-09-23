const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');
app.set("view engine", "ejs");
//1835Ja0133Nm-pass
//keertigupta-username
//const { Schema } = mongoose;
//--------------------------------------------------------------------------
require("dotenv")
  .config();
const url =
  "mongodb+srv://keertigupta:1835Ja0133Nm@student.ymwpeb2.mongodb.net/test";

  try {
    mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (error) {
    handleError(error);
  }
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});
//-------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("connected"));


app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.use(express.json());
app.use(express.urlencoded());

const teacherRoutes = require("./routes/teacherlogin")
const studentRoutes = require("./routes/studentlogin")
app.use("/teacher",teacherRoutes)
app.use("/student",studentRoutes)

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
