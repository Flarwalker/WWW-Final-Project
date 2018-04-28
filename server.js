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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/css", express.static(path.resolve(__dirname + "/css")));
app.use("/html", express.static(path.resolve(__dirname + "/html")));
app.use("/js", express.static(path.resolve(__dirname + "/js")));
app.use("/img", express.static(path.resolve(__dirname + "/img")));
app.use("/json", express.static(path.resolve(__dirname + "/json")));

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

app.get("/login", function (req, res) {
  conn.query("SELECT * FROM login", function (err, result) {
    if (err) {
      throw err;
    } else {
      var login = {};
      login.user = result[0].username;
      login.password = result[0].password;

      res.send(login);
    }
  });
});

app.post("/savePrices", function (req, res) {
  var newPrices = req.body;
  conn.query("UPDATE tickets SET price = " + newPrices.adult + " WHERE type = 'adult'", function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log("Adult Updated");
    }
  });

  conn.query("UPDATE tickets SET price = " + newPrices.senior + " WHERE type = 'senior'", function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log("Senior Updated");
    }
  });

  conn.query("UPDATE tickets SET price = " + newPrices.child + " WHERE type = 'child'", function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log("Child Updated");
    }
  });

  conn.query("UPDATE tickets SET price = " + newPrices.pass + " WHERE type = 'pass'", function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log("Pass Updated");
    }
  });
});

app.get("/attractions", function (req, res) {
  res.send(JSON.parse(fs.readFileSync('\json\attractions.json', 'utf8')));
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
