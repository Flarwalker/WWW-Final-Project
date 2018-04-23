var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.closeBtn');
var i1 = document.querySelector('#img1');
var i2 = document.querySelector('#img2');
var i3 = document.querySelector('#img3');
var i4 = document.querySelector('#img4');
var i5 = document.querySelector('#img5');
var i6 = document.querySelector('#img6');
var firstrun = true;
var open = false;
var gal4 = {
  heightReq: "54\"",
  specs: {
    topSpeed: 120,
    height: 2800,
    length: 420,
    dura: .5
  },
  rideRes: ["Max height 78\""]
}
var gal3 = {
  heightReq: "No height requirement",
  spec: {
    topSpeed: 66,
    height: 1250,
    length: 500,
    dura: 4
  },
  rideRes: ["Riders must have a love of life", "Riders must have an the courage of a lion", "Those with peanut allergies need not to worry, this is a rollercoaster."]
}
function togDialog(ride) {
  if(ride)
    modal.classList.toggle(".show-modal");
}

function windClose(e) {
  if (e.target === modal) {
    togDialog(e);
  }
}

i1.addEventListener("click", function() {
  togDialog(gal4);
});
i2.addEventListener("click", function() {
  togDialog(gal4);
});
i3.addEventListener("click", function() {
  togDialog(gal4);
});
i4.addEventListener("click", function() {
  togDialog(gal4);
});
i5.addEventListener("click", function() {
  togDialog(gal4)
})
closeBtn.addEventListener("click", function() {
  togDialog(gal4);
});
window.addEventListener("click", windClose);
