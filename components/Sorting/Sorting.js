
//initialization

const input_field = document.querySelector("#num-array");
const input_btn = document.querySelector(".input-btn");
const canvas = document.querySelector(".canvas");

//  variables and arrays

const numArray = [];


//  function to change input string to array of integers

function stringToArray()
{
    let element = "";
    let inputString = input_field.value;
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i] != ",")
        {
            element = element.concat(inputString[i]);
        }
        else
        {
            numArray.push(parseInt(element));
            element = "";
        }
    }
    numArray.push(parseInt(element));
}

//  creating span element and adding it to canvas

function createSpan()
{
    numArray.forEach((value)=>{
        let span = document.createElement("span");
        span.classList.add("canvas-span-element");
        span.style.height = value+"px";
        span.style.width = value+"px";
        canvas.append(span);
    });
}

//  Adding click event to input_btn

input_btn.addEventListener("click",()=>{
    stringToArray();
    // console.log(numArray);
    createSpan();
});