const nameForm = document.querySelector(".js-nameForm");
  const nameInput = nameForm.querySelector(".js-nameInput");
  const greetings = nameForm.querySelector(".js-greetings");

const userName_LS = localStorage.getItem("userName");



function paintGreetings(text){
  nameInput.classList.add("HIDDEN_CN");
  greetings.classList.remove("HIDDEN_CN");
  greetings.innerText = `${text}, What is your main focus today?`
}


function saveName(text){
  localStorage.setItem("userName", text);
}

function handleSubmit(){
  event.preventDefault();
  const nameTyped = nameInput.value;
  saveName(nameTyped);
  paintGreetings(nameTyped);
}

function askName(){
  nameForm.addEventListener("submit", handleSubmit);
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
