var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("#disenoWeb");
//var listItems = document.querySelectorAll("#footer");
//var firstBox = document.querySelector("#firstBox");
var secondBox = document.querySelector("#secondBox");
//var thirdBox = document.querySelector("#thirdBox");
//var fourthBox = document.querySelector("#fourthBox");
//var fifthBox = document.querySelector("#fifthBox");
//var sixthBox = document.querySelector("#sixthBox");
//var seventhBox = document.querySelector("#seventhBox");

function scrolling(e) {


  /*if (isPartiallyVisible(firstBox)) {
    firstBox.classList.add("active");
  }*/
  if (isPartiallyVisible(secondBox)) {
    secondBox.classList.add("active");
  }/*
  if (isPartiallyVisible(thirdBox)) {
    thirdBox.classList.add("active");
  }
  if (isPartiallyVisible(fourthBox)) {
    fourthBox.classList.add("active");
  }
   if (isPartiallyVisible(fifthBox)) {
   fifthBox.classList.add("active");
  }
    if (isPartiallyVisible(sixthBox)) {
    sixthBox.classList.add("active");
  }
    if (isPartiallyVisible(seventhBox)) {
    seventhBox.classList.add("active");
  }*/

  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
