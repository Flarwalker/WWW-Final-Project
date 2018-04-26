function login () {
  $.get("/login", function (ret) {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == ret.user) {
      if (pass == ret.password) {
        document.getElementById("main").innerHTML = "";

      } else {
        document.getElementById("error").innerHTML = "Password not valid!!!";
      }
    } else {
      document.getElementById("error").innerHTML = "Username not valid!!!";
    }
  });
}
