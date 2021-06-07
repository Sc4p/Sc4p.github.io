document.getElementById("hoverbtn").addEventListener("mouseover", mouseOver);
document.getElementById("hoverbtn").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("firstbtn").innerHTML = '<i class="fas fa-arrow-down mt-5 fa-3x text-white"></i>';
}

function mouseOut() {
  document.getElementById("firstbtn").innerHTML = '<i class="fas fa-circle fa-3x text-white"></i>';
}
