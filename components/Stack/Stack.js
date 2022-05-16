const stack = document.querySelector(".stack-container");
const display = document.querySelector(".display-container");
const pushBtn = document.querySelector(".push");
const popBtn = document.querySelector(".pop");
const topBtn = document.querySelector(".top");
const generateRandom = document.querySelector(".generate-random");
const isEmptyBtn = document.querySelector(".is-empty");
const inputField = document.querySelector("#data-field");

//stack initialization
let Top = -1;
let size = 19;
let stackArr = [];

pushBtn.addEventListener("click",(event)=>{
    if(Top === size-1)
    {
        let p1 = document.createElement("p");
        p1.innerText = `Please Stop.The stack is overflowing😓`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },4000);
    }
    else
    {
        if(inputField.value !== "")
        {
            let dataVal = parseInt(inputField.value);
            inputField.value = "";
            stackArr.push(dataVal);
            let span = document.createElement("span");
            span.innerText = dataVal;
            stack.prepend(span);
            Top++;
            let p1 = document.createElement("p");
            p1.innerText = `The data ${dataVal} has inserted😉`;
            display.appendChild(p1);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
    }
});

popBtn.addEventListener("click",(event)=>{
    if(Top === -1)
    {
        let p1 = document.createElement("p");
        p1.innerText = `Are you kidding!!The stack is empty😐😐`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },4000);
    }
    else
    {
        let p1 = document.createElement("p");
        p1.innerText = `The deleting element is: ${stackArr[Top]}🚮🚮`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2500);
        stackArr.pop();
        stack.firstElementChild.remove();
        Top--;
    }
});

topBtn.addEventListener("click",(event)=>{
    if(Top === -1)
    {
        let p1 = document.createElement("p");
        p1.innerText = `Are you kidding!!The stack is empty😐😐`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },4000);
    }
    else
    {
        let p1 = document.createElement("p");
        p1.innerText = `The top element is:${stackArr[Top]}🔝🔝`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },3000);
    }
});

isEmptyBtn.addEventListener("click",(event)=>{
    if(Top === -1)
    {
        let p1 = document.createElement("p");
        p1.innerText = `Are you kidding!!The stack is empty😐😐`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },4000);
    }
    else
    {
        let p1 = document.createElement("p");
        p1.innerText = `Stack is not empty🙄🙄`;
        display.appendChild(p1);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },4000);
    }
});

generateRandom.addEventListener("click",(event)=>{
    stackArr = [];
    Top = -1;
    let stackElemCount = stack.children.length;
    for(let i = 0;i<stackElemCount;i++)
    {
        stack.firstElementChild.remove();
    }
    for(let i=0;i<size;i++)
    {
        let dataVal = Math.floor(Math.random() * (i+12));
        stackArr.push(dataVal);
        let span = document.createElement("span");
        span.innerText = dataVal;
        stack.prepend(span);
        Top++;
    }
    let p1 = document.createElement("p");
    p1.innerText = `Data generated successfully😉`;
    display.appendChild(p1);
    setTimeout(()=>{
        display.lastElementChild.remove();
    },2000);
});