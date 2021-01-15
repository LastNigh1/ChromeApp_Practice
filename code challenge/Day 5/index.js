// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const leftTimeForm = document.querySelector(".js-leftTimeForm");
const leftTimeForm2 = document.querySelector(".js-leftTimeForm2")

function twoDigits(number){
  if(number < 10){
    return `0${number}`;
  }else{
    return number;
  }
}


function getTime() {
  // Don't delete this.
  const nowTime = new Date();
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const leftTime = xmasDay.getTime() - nowTime.getTime();


  /* CODE FOR  leftTimeForm. It also works!

  const leftTime_converted = new Date(leftTime);
    const leftMonths = leftTime_converted.getMonth();
    const leftDates = leftTime_converted.getDate();
    const leftHours = leftTime_converted.getHours();
    const leftMinutes = leftTime_converted.getMinutes();
    const leftseconds = leftTime_converted.getSeconds();

  leftTimeForm.innerText = `${leftMonths}M ${leftDates}d ${leftHours}h ${leftMinutes}m ${leftseconds}s`
  */

//leftTime을 Date 객체로 변환하지 않고, 밀리세컨드 단위로 나눠서 계산하기
  const oneDate = (24 * 60 * 60 * 1000);
  const oneHour = (60 * 60 * 1000);
  const oneMinute = (60 * 1000);
  const oneSecond = (1000);

  const calDates = Math.floor(leftTime / oneDate);
  const calHours = Math.floor(leftTime % oneDate / oneHour);
  const calMinutes = Math.floor(leftTime % oneDate % oneHour / oneMinute);
  const calSeconds = Math.floor(leftTime % oneDate % oneHour % oneMinute / oneSecond);

  leftTimeForm2.innerText = `${calDates}d ${twoDigits(calHours)}h ${twoDigits(calMinutes)}m ${twoDigits(calSeconds)}s`


}

function init() {
  setInterval(getTime, 1000);
}
init();
