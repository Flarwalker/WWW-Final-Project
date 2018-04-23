window.onload = function () {
  $.get('/prices', function (ret) {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page == "buy.html") {
      var adult  = localStorage.getItem("adults");
      var senior = localStorage.getItem("seniors");
      var child  = localStorage.getItem("children");
      var pass   = localStorage.getItem("passes");

      document.getElementById("adultN").innerHTML = adult;
      document.getElementById("adultP").innerHTML = ret.adult;
      document.getElementById("adultT").innerHTML = ret.adult * adult;

      document.getElementById("seniorN").innerHTML = senior;
      document.getElementById("seniorP").innerHTML = ret.senior;
      document.getElementById("seniorT").innerHTML = ret.senior * senior;

      document.getElementById("childN").innerHTML = child;
      document.getElementById("childP").innerHTML = ret.child;
      document.getElementById("childT").innerHTML = ret.child * child;

      document.getElementById("passN").innerHTML = pass;
      document.getElementById("passP").innerHTML = ret.pass;
      document.getElementById("passT").innerHTML = ret.pass * pass;

      document.getElementById("total").innerHTML = (adult * ret.adult) + (senior * ret.senior) + (child * ret.child) + (pass * ret.pass);
    } else {
      document.getElementById("adultP").innerHTML = ret.adult;
      document.getElementById("seniorP").innerHTML = ret.senior;
      document.getElementById("childP").innerHTML = ret.child;
      document.getElementById("passP").innerHTML = ret.pass;
    }
  });
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
