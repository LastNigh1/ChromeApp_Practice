const clock = document.querySelector(".js-clock")


function twoDigits(digits){
  if(digits < 10){
    return `0${digits}`
  }else{
    return digits
  }
}


function getTime(){
  const now = new Date();
  const hours = now.getHours();
  const minutes  = now.getMinutes();
  const seconds  = now.getSeconds();

  clock.innerText =
  `${hours}:${twoDigits(minutes)}`

}


function init(){
getTime();
setInterval(getTime, 1000);

}

init();
