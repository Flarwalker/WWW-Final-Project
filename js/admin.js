function login () {
  $.get("/login", function (ret) {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == ret.user) {
      if (pass == ret.password) {
        document.getElementById("main").innerHTML = '<form>' +
                                                    '<div class="form-group"><label for="adultP" >Price of Adult Ticket: </label> <input type="text" id="adultP"  name="adultP"  class="form-control"></div>' +
                                                    '<div class="form-group"><label for="seniorP">Price of Senior Ticket: </label><input type="text" id="seniorP" name="seniorP" class="form-control"></div>' +
                                                    '<div class="form-group"><label for="childP" >Price of Child Ticket: </label> <input type="text" id="childP"  name="childP"  class="form-control"></div>' +
                                                    '<div class="form-group"><label for="passP"  >Price of a Season Pass: </label><input type="text" id="passP"   name="passP"   class="form-control"></div>' +
                                                    '<button type="button" onclick="save()" class="btn btn-secondary">Save Changes</button><br /><br /></form>';
        $.get("/prices", function (ret) {
          document.getElementById("adultP").value  = ret.adult;
          document.getElementById("seniorP").value = ret.senior;
          document.getElementById("childP").value  = ret.child;
          document.getElementById("passP").value   = ret.pass;
        });

      } else {
        document.getElementById("error").innerHTML = "Password not valid!!!";
      }
    } else {
      document.getElementById("error").innerHTML = "Username not valid!!!";
    }
  });
}

function save () {
  var xhttp = new XMLHttpRequest();
  var prices = {};
  prices.adult  = document.getElementById("adultP").value;
  prices.senior = document.getElementById("seniorP").value;
  prices.child  = document.getElementById("childP").value;
  prices.pass   = document.getElementById("passP").value;
  console.log(JSON.stringify(prices));
  xhttp.open("POST", "/savePrices", true);
  xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(prices));
}
