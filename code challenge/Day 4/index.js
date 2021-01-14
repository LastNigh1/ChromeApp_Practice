
const body = document.querySelector(".js-body");
let width = window.innerWidth;


function changeBgColor() {
  if(width <= 900){
    body.style.backgroundColor = "blue";

  }else if(width >= 1600){
    body.style.backgroundColor = "yellow";

  }else{
    body.style.backgroundColor ="purple";
  }

  width = window.innerWidth;

}




function init(){
  changeBgColor();
  window.addEventListener("resize", changeBgColor);
}

init();
