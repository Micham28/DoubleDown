"counter"
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

"fold dunction"

const items = document.querySelectorAll(".QA a");
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click', toggleAccordion));