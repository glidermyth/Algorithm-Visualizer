
//initialization

const input_field = document.querySelector("#num-array");
const randomData = document.querySelector("#random-data");
const input_btn = document.querySelector(".input-btn");
const canvas = document.querySelector(".canvas");
const bubbleSort = document.querySelector(".bubbleSort");
const insertionSort = document.querySelector(".insertionSort");
const selectionSort = document.querySelector(".selectionSort");
const display = document.querySelector(".display");
const randomBtn = document.querySelector(".random-number");

//  variables and arrays

let numArray = [];
const minHeight = 100;
const minElemHeight = 5;


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
            }, time += 200);
            setTimeout(() => {
                canvasChildren[i].style.backgroundColor = spanColor;
                canvasChildren[i + 1].style.backgroundColor = spanColor;
            }, time += 200);
        }
        counter++;
    }

    setTimeout(() => {
        display.firstElementChild.remove();
    }, time += 200);
});

//  Implementing insertion sort algorithm and adding click event to the button

// insertionSort.addEventListener("click",(event)=>{
//     let canvasChildren = canvas.children;
//     let counter = 1;
//     let time = 0;
//     let spanColor = "#7900FF";
//     let spanCmpColor = "#FF6363";
//     let matchColor = "#83BD75";

//     for(let i=0;i<canvasChildren.length;i++)
//     {
//         let j = i+1;
//         let val = canvasChildren[j].textContent;

//         let p = document.createElement("p");
//         p.textContent = `The Key Value is: ${val}`;
//         display.append(p);

//         while(j>0 && (parseInt(val) < parseInt(canvasChildren[j-1].textContent)))
//         {
//             setTimeout(()=>{
//                 // canvasChildren[j].style.backgroundColor = spanCmpColor;
//                 // canvasChildren[j-1].style.backgroundColor = spanCmpColor;
//                 canvasChildren[j].textContent = canvasChildren[j-1].textContent;
//                 j--;
//             },time+=700);
//             // setTimeout(()=>{
//             //     canvasChildren[j].style.backgroundColor = spanColor;
//             //     canvasChildren[j-1].style.backgroundColor = spanColor;
//             // },time+=700);
//         }
//         canvasChildren[j].textContent = val;
//     }
// });

selectionSort.addEventListener("click",(event)=>{
    let canvasChildren = canvas.children;
    let time = 0;
    let spanColor = "#7900FF";
    let spanCmpColor = "#83BD75";
    let matchColor = "#FF6363";

    let p = document.createElement("p");
    p.textContent = 'Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.';
    display.append(p);

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
            },time+=200);
            setTimeout(()=>{
                canvasChildren[i].style.backgroundColor = spanColor;
                canvasChildren[j].style.backgroundColor = spanColor;
            },time+=200)
        }
    }

    setTimeout(()=>{
        display.firstElementChild.remove();
    },time+=200);
});

randomBtn.addEventListener("click",(event)=>{
    numArray = [];
    let canvasChildCount = canvas.childElementCount;
    for(let i=0;i<canvasChildCount;i++)
    {
        canvas.firstElementChild.remove();  
    }

    let dataCount = parseInt(randomData.value);
    let loopLength = 0;
    if(dataCount>60)
    {
        let p = document.createElement("p");
        p.textContent = `The canvas can only contain at max 60 element.`;
        display.append(p);
        setTimeout(()=>{
            display.firstElementChild.remove();
        },2000);
        loopLength = 60;
    }
    else if(dataCount<=0 || randomData.value == "")
    {
        let p = document.createElement("p");
        p.textContent = `Element count can not be zero,negative or empty`;
        display.append(p);
        setTimeout(()=>{
            display.firstElementChild.remove();
        },2000);
    }
    else
    {
        loopLength = dataCount;
    }

    for(let i=1;i<=loopLength;i++)
    {
        let num = (Math.floor(Math.random() * (i+11)));
        if(num > 0)
        {
            numArray.push(num);
        }
    }
    console.log(numArray);
    createSpan();
});