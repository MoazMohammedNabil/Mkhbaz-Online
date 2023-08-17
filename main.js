var currentImage = 1;
var totalImages = 3;

function changeImage() {
  var current = document.getElementById("myImage");
  var next = document.getElementById("nextImage");
  var third = document.getElementById("thirdImage");

  current.classList.add("hidden");
  next.classList.add("hidden");
  third.classList.add("hidden");

  currentImage++;
  if (currentImage > totalImages) {
    currentImage = 1;
  }

  if (currentImage === 1) {
    next.classList.remove("hidden");
  } else if (currentImage === 2) {
    third.classList.remove("hidden");
  } else {
    current.classList.remove("hidden");
  }
}