let adultP = 45;
let seniorP = 35;
let childP = 35;
let passP = 300;

window.onload = function () {
  $('#adultP').html = adultP;
  $('#seniorP').html = seniorP;
  $('#childP').html = childP;
  $('#passP').html = passP;
};

function buy () {
  var adult = $("#adults").value;
  var senior = $("#seniors").value;
  var children = $("#childrens").value;
  var pass = $("#passes").value;

  if (typeof(Stroage) !== "undefined") {
    localStorage.setItem("adults", adult);
    localStorage.setItem("senior", senior);
    localStorage.setItem("children", children);
    localStorage.setItem("pass", pass);
  } else {
    console.log("Sorry, your browser does not support Web Storage");
  }

  window.location.href = 'buy.html';
}
