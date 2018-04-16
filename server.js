const express = require ("express");
const bodyParser = require ("body-parser");
const fs = require ("fs");
const path = require ("path");

let app = express ();

app.use("/css", express.static(path.resolve(__dirname + "/css")));
app.use("/html", express.static(path.resolve(__dirname + "/html")));
app.use("/js", express.static(path.resolve(__dirname + "/js")));
app.use("/img", express.static(path.resolve(__dirname + "/img")));

// Sends the Main HTML Pages
app.get("/", function (req, res) {
   res.send(fs.readFileSync(path.resolve(__dirname + "/home.html"), {encoding: "utf8"}));
});

// Sets node js to listen to port 8080.
app.listen(8080, function() {
	console.log('Server running on port 8080!');
	console.log('Visit http://localhost:8080 to view.');
});
