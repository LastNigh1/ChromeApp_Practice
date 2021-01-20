const range = document.querySelector(".js-range");
const form = document.querySelector(".js-form");
const numberInput = document.querySelector(".js-numberInput");
const button = document.querySelector(".js-button");
const title = document.querySelector(".js-title");
const resultTitle = document.querySelector(".js-resultTitle");
const win = document.querySelector(".js-win");


function compare(typed, random){
  const typedNum = parseInt(typed);
  const randomNum = parseInt(random);

  resultTitle.innerText =`You chose: ${typedNum}, the machine chose: ${randomNum}.`;

  if(typedNum === randomNum){
    win.innerText = `You won!`;
  }else{
    win.innerText = `You lost!`;
  };

  console.log(typedNum);
  console.log(randomNum);
}


function handleClick(event){
  event.preventDefault();

  const typedNum = numberInput.value;
  const rangedNum = range.value;
  const randomNum = Math.floor(Math.random() * rangedNum )
  if(typedNum !== ""){
    compare(typedNum, randomNum);
  }
}

function handleRange(){
  const rangedNumber = range.value;
  title.innerText = `Generate a number between 0 and ${rangedNumber}`;

}


function init(){
  handleRange();
  range.addEventListener("input", handleRange);


    button.addEventListener("click", handleClick);
    form.addEventListener("submit", handleClick);



}

init();
