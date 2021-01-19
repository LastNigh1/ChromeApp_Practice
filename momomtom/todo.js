const toDoForm = document.querySelector(".js-toDoForm");
const toDoList = document.querySelector(".js-toDoList");
const toDoInput = document.querySelector(".js-toDoInput");

const TODO_LS = "localToDoArr";
let toDoArr = [];
let IdCount = 0;




function saveLocal(){
  localStorage.setItem(TODO_LS, JSON.stringify(toDoArr));
}


function paintToDoList(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
    delBtn.innerText = "[X]";
  const span = document.createElement("span");
    span.innerText = text;

  toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = IdCount;
}

function addToDoArr(text){

  IdCount = IdCount + 1;

  const toDoObj = {
    text: text,
    id: IdCount
  };



  toDoArr.push(toDoObj);

  console.log(toDoArr);
  saveLocal();

}


function handleToDoSubmit(event){
  event.preventDefault();
  const typedToDo = toDoInput.value;
  addToDoArr(typedToDo);
  paintToDoList(typedToDo);

  toDoInput.value = "";
}

function loadToDo(){
  const loadedToDo = localStorage.getItem(TODO_LS);
  if(loadedToDo !== null){
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function(toDo){
      paintToDoList(toDo.text);
    }

    );

  }

}

function init(){

  toDoForm.addEventListener("submit", handleToDoSubmit);
  loadToDo();
}

init();
