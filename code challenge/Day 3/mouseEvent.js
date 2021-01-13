const title = document.querySelector(".js-title");

const colorArray  =["#1abc9c", "#3498db", "#e74c3c", "#9b59b6"];

function mouseEnter () {
  title.innerText = "The mouse is here!";
  title.style.color = colorArray[0];
}

function mouseLeave(){
  title.innerText = "The mouse is gone!";
  title.style.color = colorArray[1];

}

function mouseRightClick () {
  title.innerText = "That was a right click!";
  title.style.color = colorArray[2];
}

function resize() {
  title.innerText = "You just resized!";
  title.style.color = colorArray[3];
}




function init(){
  title.addEventListener("mouseenter", mouseEnter);
  title.addEventListener("mouseleave", mouseLeave);
  document.addEventListener("contextmenu",mouseRightClick);
  window.addEventListener("resize", resize);
}

init();
