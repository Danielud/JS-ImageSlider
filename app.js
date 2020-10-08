// select all images
var allImages = document.querySelectorAll(".imgSlider div");
var indexCount = 0;
// hide all images
for (var i = 0; i < allImages.length; i++) {
  allImages[i].style.display = "none";
}
allImages[0].style.display = "block";

function next() {
  for (indexCount; indexCount < allImages.length; indexCount++) {
    if (allImages[indexCount].style.display == "block") {
      allImages[indexCount].style.display = "none";
      if (indexCount == allImages.length - 1) {
        indexCount = 0;
        allImages[indexCount].style.display = "block";

        break;
      } else {
        allImages[indexCount + 1].style.display = "block";
        break;
      }
    }
  }
}
function prev() {
  if (indexCount >= allImages.length) {
    indexCount = 0;
  }
  for (indexCount; indexCount < allImages.length; indexCount++) {
    if (allImages[indexCount].style.display == "block") {
      allImages[indexCount].style.display = "none";
      if (indexCount == 0) {
        allImages[allImages.length - 1].style.display = "block";

        break;
      } else {
        allImages[indexCount - 1].style.display = "block";
        break;
      }
    }
  }
}
