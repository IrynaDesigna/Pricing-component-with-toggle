"use strict";

document.getElementById("switch").onclick = function() {myFunction()};

function myFunction() {
  let annually = document.getElementsByClassName("annually"),
      monthly = document.getElementsByClassName("monthly");

  let i = 0;
  while (i < 3) {
    annually[i].classList.toggle("hidden");
    monthly[i].classList.toggle("hidden")
    i++;
  }
}
