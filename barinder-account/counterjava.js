var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

var coll = document.getElementsByClassName("collapsible");
var i;