// console.log("Script is running!");
// var typed = new Typed(".auto-type", {
//     strings: ["Hi there!", "Elina here :)", "Hope you enjoy!"],
//     typeSpeed: 150,
//     backSpeed: 100,
//     loop: true
// })

var messageArray = ["Hi there!"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
  document.querySelector("#message").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) 
    setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);