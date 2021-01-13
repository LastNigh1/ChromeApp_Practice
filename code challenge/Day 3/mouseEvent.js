const title = document.querySelector(".js-title");

const colorArray  = ["#1abc9c", "#3498db", "#e74c3c", "#9b59b6"];


function superEventHandler(event){
  switch (event.type){
    case "mouseenter":
      title.innerText = "The mouse is here!";
      title.style.color = colorArray[0];
      break;

    case "mouseleave":
      title.innerText = "The mouse is gone!";
      title.style.color = colorArray[1];
      break;

    case "contextmenu":
      title.innerText = "That was a right click!";
      title.style.color = colorArray[2];
      break;

    case "resize":
    title.innerText = "You just resized!";
    title.style.color = colorArray[3];
    break;
  }
}


/*
===
이렇게 구현할 수도 있다. 단, 이 경우 init 함수 내에서 superEventHandler.mouseEnter
처럼 함수의 값을 좀 더 구체적으로 적어줘야 한다.
====

const superEventHandler = {
  mouseEnter:
    function mouseEnter () {
      title.innerText = "The mouse is here!";
      title.style.color = colorArray[0];
    },

  mouseLeave:
    function mouseLeave(){
      title.innerText = "The mouse is gone!";
      title.style.color = colorArray[1];
    },
  mouseRightClick:
    function mouseRightClick () {
      title.innerText = "That was a right click!";
      title.style.color = colorArray[2];
    },
  resize:
    function resize() {
      title.innerText = "You just resized!";
      title.style.color = colorArray[3];
    }
};
*/

function init(){
  title.addEventListener("mouseenter", superEventHandler);
  title.addEventListener("mouseleave", superEventHandler);
  document.addEventListener("contextmenu",superEventHandler);
  window.addEventListener("resize", superEventHandler);
}

init();
