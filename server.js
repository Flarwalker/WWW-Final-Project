const express = require ("express");
const bodyParser = require ("body-parser");
const fs = require ("fs");
const path = require ("path");
const mysql = require ("mysql");

let app = express ();

let conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "www",
  password: "www",
  database: "wwwproject"
});

conn.connect (function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.use("/css", express.static(path.resolve(__dirname + "/css")));
app.use("/html", express.static(path.resolve(__dirname + "/html")));
app.use("/js", express.static(path.resolve(__dirname + "/js")));
app.use("/img", express.static(path.resolve(__dirname + "/img")));

app.get("/prices", function (req, res) {
  conn.query("SELECT price FROM tickets", function (err, result) {
    if (err) {
      throw err;
    } else {
      var prices = {};
      prices.adult = result[0].price;
      prices.senior = result[1].price;
      prices.child = result[2].price;
      prices.pass = result[3].price;

      res.send(prices);
    }
  });
});

// Sends the Main HTML Pages
app.get("/", function (req, res) {
   res.send(fs.readFileSync(path.resolve(__dirname + "/html/home.html"), {encoding: "utf8"}));
});

// Sets node js to listen to port 8080.
app.listen(8080, function() {
	console.log('Server running on port 8080!');
	console.log('Visit http://localhost:8080 to view.');
});
