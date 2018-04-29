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
}
