window.onload = function () {
  adultP = 45;
  seniorP = 35;
  childP = 35;
  passP = 300;

  document.getElementById("adultP").innerHTML = 45;
  document.getElementById("seniorP").innerHTML = 35;
  document.getElementById("childP").innerHTML = 35;
  document.getElementById("passP").innerHTML = 300;
};

function buy () {
  var adult = document.getElementById("adults").value;
  var senior = document.getElementById("seniors").value;
  var children = document.getElementById("childrens").value;
  var pass = document.getElementById("passes").value;

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("adults", adult);
    localStorage.setItem("seniors", senior);
    localStorage.setItem("children", children);
    localStorage.setItem("passes", pass);
  } else {
    console.log("Sorry, your browser does not support Web Storage");
  }

  window.location.href = 'buy.html';
}

function setBuy () {
  var adult  = localStorage.getItem("adults");
  var senior = localStorage.getItem("seniors");
  var child  = localStorage.getItem("children");
  var pass   = localStorage.getItem("passes");

  document.getElementById("adultN").innerHTML = adult;
  document.getElementById("adultP").innerHTML = 45;
  document.getElementById("adultT").innerHTML = 45 * adult;

  document.getElementById("seniorN").innerHTML = senior;
  document.getElementById("seniorP").innerHTML = 35;
  document.getElementById("seniorT").innerHTML = 35 * senior;

  document.getElementById("childN").innerHTML = child;
  document.getElementById("childP").innerHTML = 35;
  document.getElementById("childT").innerHTML = 35 * child;

  document.getElementById("passN").innerHTML = pass;
  document.getElementById("passP").innerHTML = 300;
  document.getElementById("passT").innerHTML = 300 * pass;

  document.getElementById("total").innerHTML = (adult * 45) + (senior * 35) + (child * 35) + (pass * 300);
}
