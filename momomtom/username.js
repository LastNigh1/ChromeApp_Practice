const form = document.querySelector(".js-nameForm");
  const input = form.querySelector(".js-nameInput");
  const greetings = form.querySelector(".js-greetings");

const userName_LS = localStorage.getItem("userName");



function paintGreetings(text){
  input.classList.add("HIDDEN_CN");
  greetings.classList.remove("HIDDEN_CN");
  greetings.innerText = `${text}, What is your main focus today?`
}


function saveName(text){
  localStorage.setItem("userName", text);
}

function handleSubmit(){
  event.preventDefault()
  const nameTyped = input.value;
  saveName(nameTyped);
  paintGreetings(nameTyped);
}

function askName(){
  form.addEventListener("submit", handleSubmit);
}

function loadName(){
  if(userName_LS === null){
    askName();
  }else{
    paintGreetings(userName_LS);
  }
}


function init(){
  loadName();
}

init();
