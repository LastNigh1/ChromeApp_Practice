
let result = document.querySelector(".js-result");
let expression = document.querySelector(".js-expression");

let newNumFlag = true;
let carryingFlag = false;
let equalFlag = false;


const btnNum = document.querySelectorAll(".js-btnNum");
const btnCal = document.querySelectorAll(".js-btnCal");
const btnClear = document.querySelector(".js-btnClear");
const btnEqaul = document.querySelector(".js-btnEqual");


function addEventAll(target, eventType, handle){
  for(var i = 0; i < target.length; i++){
    target[i].addEventListener(eventType, handle);
  };
}


function addNum(event){

  const target= event.target.value;

  const x = parseInt(target);

  if(equalFlag === true){ // equal을 누르고 나서 숫자를 누르면 완전 초기화//
    clear();
    equalFlag = false;
  }

  if(newNumFlag === true){
    result.value = "";
    newNumFlag = false;
    expression.value = expression.value + x;
    result.value = result.value + x;

  }else{
    expression.value = expression.value + x;
    result.value = result.value + x;
  }
}


function calculate(event){
  const target = event.target.value;
  const x = target;

  equalFlag = false; //equal을 누르고 나서 사칙연산기호를 누르고, 숫자를 누르는 경우 초기화되지 않기 위함//

  if(carryingFlag === false){
    expression.value = expression.value + x ;
    carryingFlag = true;
  }else{
    const expr_calculated = eval(expression.value);

    result.value = expr_calculated;
    expression.value = expr_calculated;

    expression.value = expression.value + x ;

  }
  newNumFlag = true;

}


function equal(){

  const expr_calculated = eval(expression.value);

  result.value = expr_calculated;
  expression.value = expr_calculated;

  newNumFlag = true;
  equalFlag = true;
  carryingFlag = false;

}


function clear(){
  expression.value = "";
  result.value = "0";

  carryingFlag = false;
  newNumFlag = true;

}

function init(){
  clear();
  addEventAll(btnNum, "click", addNum);
  addEventAll(btnCal, "click", calculate)
  btnEqaul.addEventListener("click", equal);
  btnClear.addEventListener("click", clear);

}

init();
