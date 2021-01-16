const sel = document.querySelector("select");
const COUNTRY_LS = localStorage.getItem("country");


function saveCountry(text){
  localStorage.setItem("country", text);
}

function handleChange(){
  const currentValue = sel.options[sel.selectedIndex].value;
  saveCountry(currentValue);
}

function loadCountry(){
  if(COUNTRY_LS === null){
    sel.addEventListener("change", handleChange);
  
  }else{
    sel.value = COUNTRY_LS;
  }
}


function init(){
  loadCountry();
}

init();
