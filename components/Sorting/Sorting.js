
//initialization

const input_field = document.querySelector("#num-array");
const input_btn = document.querySelector(".input-btn");
const canvas = document.querySelector(".canvas");
const bubbleSort = document.querySelector(".bubbleSort");
const insertionSort = document.querySelector(".insertionSort");
const selectionSort = document.querySelector(".selectionSort");
const display = document.querySelector(".display");

//  variables and arrays

let numArray = [];
const minHeight = 30;
const minElemHeight = 12;


//  function to change input string to array of integers

function stringToNumArray() {
    numArray = [];
    let canvasElementCount = canvas.childElementCount;
    for (let i = 0; i < canvasElementCount; i++) {
        canvas.firstElementChild.remove();
    }
    let element = "";
    let inputString = input_field.value;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] != ",") {
            element = element.concat(inputString[i]);
        }
        else {
            numArray.push(parseInt(element));
            element = "";
        }
    }
    numArray.push(parseInt(element));
}

//  creating span element and adding it to canvas

function createSpan() {
    numArray.forEach((value) => {
        let span = document.createElement("span");
        span.classList.add("canvas-span-element");
        span.textContent = value;
        if (value > minElemHeight) {
            span.style.height = (minHeight + (value - minElemHeight)) + "px";
        }
        canvas.append(span);
    });
}

//  Adding click event to input_btn

input_btn.addEventListener("click", () => {
    stringToNumArray();
    // console.log(numArray);
    createSpan();
});


//  Implementing bubble sort algorithm and adding click event to the button
bubbleSort.addEventListener("click", (event) => {

    let p = document.createElement("p");
    p.textContent = 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high.';
    display.append(p);

    let canvasChildren = canvas.children;
    // console.dir(canvasChildren);
    let counter = 1;
    let time = 0;
    let spanColor = "#7900FF";
    let spanCmpColor = "#FF6363";
    while (counter < canvasChildren.length) {
        for (let i = 0; i < canvasChildren.length - counter; i++) {
            setTimeout(() => {
                let val1 = parseInt(canvasChildren[i].textContent);
                let val2 = parseInt(canvasChildren[(i + 1)].textContent);
                canvasChildren[i].style.background = spanCmpColor;
                canvasChildren[i + 1].style.background = spanCmpColor;
                if (val1 > val2) {
                    let temp = val1;
                    val1 = val2;
                    val2 = temp;
                }
                if (val1 > minElemHeight) {
                    canvasChildren[i].style.height = (minHeight + (val1 - minElemHeight)) + "px";
                }
                else {
                    canvasChildren[i].style.height = 0;
                }
                if (val2 > minElemHeight) {
                    canvasChildren[i + 1].style.height = (minHeight + (val2 - minElemHeight)) + "px";
                }
                else {
                    canvasChildren[i].style.height = 0;
                }
                canvasChildren[i].textContent = val1;
                canvasChildren[i + 1].textContent = val2;
            }, time += 700);
            setTimeout(() => {
                canvasChildren[i].style.backgroundColor = spanColor;
                canvasChildren[i + 1].style.backgroundColor = spanColor;
            }, time += 700);
        }
        counter++;
    }

    setTimeout(() => {
        display.firstElementChild.remove();
    }, time += 700);
});

//  Implementing insertion sort algorithm and adding click event to the button

// insertionSort.addEventListener("click",(event)=>{
//     let canvasChildren = canvas.children;
//     let counter = 1;
//     let time = 0;
//     let spanColor = "#7900FF";
//     let spanCmpColor = "#FF6363";

//     for(let i=1;i<canvasChildren.length;i++)
//     {
//         let keyVal = parseInt(canvasChildren[i].textContent);
//         // console.log(keyVal);
//         let prevVal = parseInt(canvasChildren[i-1].textContent);
//         let j = i;
//         while(j>0 && prevVal>keyVal)
//         {
//             setTimeout(()=>{
//                 canvasChildren[j].textContent = prevVal;
//                 j--;
//                 prevVal = parseInt(canvasChildren[j-1].textContent);
//                 canvasChildren[j].style.backgroundColor = spanCmpColor;
//             },time+=700);
//         }
//         setTimeout(()=>{
//             canvasChildren[j].textContent = keyVal;
//         },time+=700);
//     }
// });

selectionSort.addEventListener("click",(event)=>{
    let canvasChildren = canvas.children;
    let time = 0;
    let spanColor = "#7900FF";
    let spanCmpColor = "#FF6363";
    let matchColor = "#83BD75";

    for(let i=0;i<canvasChildren.length -1;i++)
    {
        for(let j = i+1;j<canvasChildren.length;j++)
        {
            setTimeout(()=>{
                canvasChildren[i].style.backgroundColor = spanCmpColor;
                canvasChildren[j].style.backgroundColor = spanCmpColor;
                if(parseInt(canvasChildren[j].textContent)<parseInt(canvasChildren[i].textContent))
                {
                    let h1 = parseInt(canvasChildren[i].textContent);
                    let h2 = parseInt(canvasChildren[j].textContent);
                    let temp = canvasChildren[j].textContent;
                    canvasChildren[j].textContent = canvasChildren[i].textContent;
                    canvasChildren[i].textContent = temp;
                    canvasChildren[i].style.backgroundColor = matchColor;
                    canvasChildren[j].style.backgroundColor = matchColor;
                    if (h1 > minElemHeight) {
                        canvasChildren[j].style.height = (minHeight + (h1 - minElemHeight)) + "px";
                    }
                    else {
                        canvasChildren[j].style.height = 0;
                    }
                    if (h2 > minElemHeight) {
                        canvasChildren[i].style.height = (minHeight + (h2 - minElemHeight)) + "px";
                    }
                    else {
                        canvasChildren[i].style.height = 0;
                    }
                }
            },time+=700);
            setTimeout(()=>{
                canvasChildren[i].style.backgroundColor = spanColor;
                canvasChildren[j].style.backgroundColor = spanColor;
            },time+=700)
        }
    }
});