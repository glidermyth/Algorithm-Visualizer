
const searching = document.querySelector(".Searching");
const display = document.querySelector(".display-container");
const linearSearch = document.querySelector(".linear-search");
const binarySearch = document.querySelector(".binary-search");
const generateRandom = document.querySelector(".generate-random");
const flush = document.querySelector(".flush");
const dataField = document.querySelector("#data-field");

let matchColor = "#48BF84";
let misMatchColor = "#FF4949";
let findFlag = false;
let time = 0;

generateRandom.addEventListener("click",(event)=>{
    let searchChildCount = searching.children.length;
    for(let i=0;i<searchChildCount;i++)
    {
        searching.firstElementChild.remove();
    }
    for(let i=0;i<20;i++)
    {
        let span = document.createElement("span");
        span.textContent = Math.ceil(Math.random() * (i+11));
        searching.append(span);
    }
});

flush.addEventListener("click",(event)=>{
    let searchChildCount = searching.children.length;
    for(let i=0;i<searchChildCount;i++)
    {
        searching.firstElementChild.remove();
    }
});

linearSearch.addEventListener("click",(event)=>{
    let keyVal = parseInt(dataField.value);
    let searchChildCount = searching.children.length;
    let matchIndex = -1;
    for(let i = 0;i<searchChildCount;i++)
    {
        if(keyVal === parseInt(searching.children[i].textContent))
        {
            matchIndex = i;
            findFlag = true;
            setTimeout(()=>{
                searching.children[i].style.background = matchColor;
            },time+=1000);
            break;
        }
        else{
            setTimeout(()=>{
                searching.children[i].style.background = misMatchColor;
            },time+=1000);
        }
    }
    setTimeout(()=>{
        if(findFlag)
        {
            let p = document.createElement("p");
            p.textContent = `Element found successfully😃.At position: ${matchIndex+1}`;
            display.append(p);
        }
        else
        {
            let p = document.createElement("p");
            p.textContent = `Can not find the element😞`;
            display.append(p);
        }
    },time+=1000);
    setTimeout(()=>{
        display.firstElementChild.remove();
    },time+=2000);
});