const form = document.querySelector(".js-nameForm");
  const input = document.querySelector(".js-nameInput");
  const greetings = document.querySelector(".js-greetings");



function askName(event){
  event.preventDefault();
  console.log("work?");
  input.classList.add("HIDDEN_CN");
  greetings.classList.remove("HIDDEN_CN");
}

function loadName(){
  const userName_LS = localStorage.getItem("userName");
  if(userName_LS === null){
    askName();
  }else{

  }
}



function init(){
  loadName();
}

init();
