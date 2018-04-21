// Empty JS for your own code to be here

var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.closeBtn');
var i1 = document.querySelector('#img1');
var i2 = document.querySelector('#img2');
var i3 = document.querySelector('#img3');
var i4 = document.querySelector('#img4');
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
function togDialog(ride) {
  if(ride)
    modal.classList.toggle("show-modal");
}

function windClose(e) {
  if (e.target === modal) {
    togDialog(e);
  }
}

i1.addEventListener("click", togDialog);
i2.addEventListener("click", togDialog);
i3.addEventListener("click", togDialog);
i4.addEventListener("click", function() {
  togDialog(gal4);
});
closeBtn.addEventListener("click", togDialog);
window.addEventListener("click", windClose);
