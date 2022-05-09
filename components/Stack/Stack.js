const stack = document.querySelector(".stack-container");
const display = document.querySelector(".display-container");
const pushBtn = document.querySelector(".push");
const inputField = document.querySelector("#data-field");

pushBtn.addEventListener("click",(event)=>{
    let dataVal = parseInt(inputField.value);
    let span = document.createElement("span");
    span.innerText = dataVal;
    stack.prepend(span);
});