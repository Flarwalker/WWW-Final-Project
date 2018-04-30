window.onload = function() {
  $.get('/attractions', function (js) {
    for (i=0; i<6; i++){
      var coast = js.rides[i];
      coast.coaster.specs.forEach(function(c) {
        var list = document.getElementById('spec' + (i+1));
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(c));
        list.appendChild(entry);
      });
      coast.coaster.health.forEach(function(c) {
        var list = document.getElementById('healthReq' + (i+1));
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(c));
        list.appendChild(entry);
      });
    }
  });
  var wt1 = $.get('/waittime/88', function (t) {
    document.getElementById('wt1').innerHTML = "Wait Time:" + t;
  }).done(function () {setInterval(wt1, 1000)});
  var wt2 = $.get('/waittime/90', function (t) {
    document.getElementById('wt2').innerHTML = "Wait Time:" + t;
  }).done(function () {setInterval(wt2, 1000)});
  var wt3 = $.get('/waittime/78', function (t) {
    document.getElementById('wt3').innerHTML = "Wait Time:" + t;
  }).done(function () {setInterval(wt3, 1000)});
  var wt4 = $.get('/waittime/63', function (t) {
    document.getElementById('wt4').innerHTML = "Wait Time:" + t;
  }).done(function() {setInterval(wt4, 1000)});
  var wt5 = $.get('/waittime/55', function (t) {
    document.getElementById('wt5').innerHTML = "Wait Time:" + t;
  }).done(function() {setInterval(wt5, 1000)});
  var wt6 = $.get('/waittime/120', function (t) {
    document.getElementById('wt6').innerHTML = "Wait Time:" + t;
  }).done(function () {setInterval(wt6, 1000)});
}


