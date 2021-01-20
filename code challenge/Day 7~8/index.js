const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const PENDING_LS = "pending To-Do List";
const FINISHED_LS = "finished To-Do List";
let pendingArr = [];
let finishedArr = [];
let idNum = 0;

function saveLocal(){
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingArr));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArr));
}

function delToDo(event){
  const delTarget = event.target.parentNode;

  if(delTarget.parentNode === pendingList){
    pendingList.removeChild(delTarget);
    pendingArr = pendingArr.filter(function(a){
      return a.id !== parseInt(delTarget.id);
    });

  }else if(delTarget.parentNode === finishedList){
    finishedList.removeChild(delTarget);
    finishedArr = finishedArr.filter(function(a){
      return a.id !== parseInt(delTarget.id);
    });
  }

  saveLocal();

}


function complToDo(){
  const complTarget = event.target.parentNode;
  pendingList.removeChild(complTarget);
  finishedList.appendChild(complTarget);

  const complObj = pendingArr.filter(function(a){
    return a.id === parseInt(complTarget.id);
  });

  pendingArr = pendingArr.filter(function(a){
    return a.id !== parseInt(complTarget.id);
  });

  finishedArr.push(complObj);
  saveLocal();
}


function unComplToDo(){
  const unComplTarget = event.target.parentNode;
  finishedList.removeChild(unComplTarget);
  pendingList.appendChild(unComplTarget);

  const unComplObj = finishedArr.filter(function(a){
    return a.id === parseInt(unComplTarget.id);
  });

  finishedArr = finishedArr.filter(function(a){
    return a.id !== parseInt(unComplTarget.id);
  });

  pendingArr.push(unComplObj);
  saveLocal()
}


function addToPendingArr(text){

  idNum = idNum + 1;

  const toDoObj = {
    text: text,
    id: idNum
  };

  pendingArr.push(toDoObj);
  saveLocal();
}


function paintPendingToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", delToDo);
  const comBtn = document.createElement("button");
    comBtn.innerText = "✔";
    comBtn.addEventListener("click", complToDo);
  const span = document.createElement("span");
    span.innerText = text

  pendingList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(comBtn);
    li.id = idNum;

  input.value =""

}


function paintFinishedToDo(){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", delToDo);
  const unComBtn = document.createElement("button");
    unComBtn.innerText = "🔙";
    unComBtn.addEventListener("click", unComplToDo);
  const span = document.createElement("span");
    //const text = finishedArr.filter(function(a){
      //return a.id ===
    //span.innerText =


  finishedList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(unComBtn);
    li.id = idNum;

}


function handleSubmit(event){
  event.preventDefault();

  const typedText = input.value;
  addToPendingArr(typedText);
  paintPendingToDo(typedText);
  saveLocal();

}


function loadLocalToDo(){
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);

  if(loadedPending !== null){
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function(a){
      paintPendingToDo(a.text);
      }
    );
  }

  if(loadedFinished !== null){
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function(a){
      paintFinishedToDo(a.text);
      }
    );
  }

}


function init(){
  loadLocalToDo();
  form.addEventListener("submit",handleSubmit);

}

init();
