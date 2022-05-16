const linkedList = document.querySelector(".linkedList-container");
const display = document.querySelector(".display-container");
const insertAtHead = document.querySelector(".insertAtHead");
const deleteFromHead = document.querySelector(".deleteFromHead");
const insertAtTail = document.querySelector(".insertAtTail");
const deleteFromTail = document.querySelector(".deleteFromTail");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const generateRandom = document.querySelector(".generate-random");
const flush = document.querySelector(".flush");
const inputData = document.querySelector("#data_field");

insertAtTail.addEventListener("click",(event)=>{
    if(inputData.value != "")
    {
        if(linkedList.children.length == 0)
        {
            let span = document.createElement("span");
            span.innerText = inputData.value;
            linkedList.append(span);
            let p = document.createElement("p");
            p.innerText = `${inputData.value} inserted successfully`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
        else if(linkedList.children.length == 25)
        {
            let p = document.createElement("p");
            p.innerText = `LinkedList has no empty space left😔`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
        else
        {
            let span = document.createElement("span");
            span.innerText = inputData.value;
            let img = document.createElement("img");
            // img.src = "C:/Users/skarb/Desktop/Arbaj Documents/Javascript/Projects/Algorithm Visualizer/Images/arrow.png";
            img.src = "../../Images/arrow.png";
            linkedList.append(img);
            linkedList.append(span);
            let p = document.createElement("p");
            p.innerText = `${inputData.value} inserted successfully`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
    }
});

insertAtHead.addEventListener("click",(event)=>{
    if(inputData.value != "")
    {
        if(linkedList.children.length == 0)
        {
            let span = document.createElement("span");
            span.innerText = inputData.value;
            linkedList.append(span);
            let p = document.createElement("p");
            p.innerText = `${inputData.value} inserted successfully`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
        else if(linkedList.children.length == 25)
        {
            let p = document.createElement("p");
            p.innerText = `LinkedList has no empty space left😔`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
        else
        {
            let span = document.createElement("span");
            span.innerText = inputData.value;
            let img = document.createElement("img");
            img.src = "../../Images/arrow.png";
            linkedList.prepend(img);
            linkedList.prepend(span);
            let p = document.createElement("p");
            p.innerText = `${inputData.value} inserted successfully`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
    }
});

deleteFromHead.addEventListener("click",(event)=>{
    if(linkedList.children.length == 0)
    {
        let p = document.createElement("p");
        p.innerText = `LinkedList has no element left😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else if(linkedList.children.length == 1)
    {
        let p = document.createElement("p");
        p.innerText = `${linkedList.firstElementChild.textContent} deleted successfully.`;
        display.append(p);
        linkedList.firstElementChild.remove();
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.innerText = `${linkedList.firstElementChild.textContent} deleted successfully.`;
        display.append(p);
        linkedList.firstElementChild.remove();
        linkedList.firstElementChild.remove();
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
});

deleteFromTail.addEventListener("click",(event)=>{
    if(linkedList.children.length == 0)
    {
        let p = document.createElement("p");
        p.innerText = `LinkedList has no element left😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else if(linkedList.children.length == 1)
    {
        let p = document.createElement("p");
        p.innerText = `${linkedList.lastElementChild.textContent} deleted successfully.`;
        display.append(p);
        linkedList.firstElementChild.remove();
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.innerText = `${linkedList.lastElementChild.textContent} deleted successfully.`;
        display.append(p);
        linkedList.lastElementChild.remove();
        linkedList.lastElementChild.remove();
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
});

front.addEventListener("click",(event)=>{
    if(linkedList.children.length == 0)
    {
        let p = document.createElement("p");
        p.innerText = `LinkedList has no element left😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.innerText = `${linkedList.firstElementChild.textContent} is the front element.`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
});

back.addEventListener("click",(event)=>{
    if(linkedList.children.length == 0)
    {
        let p = document.createElement("p");
        p.innerText = `LinkedList has no element left😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.innerText = `${linkedList.lastElementChild.textContent} is the front element.`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
});

generateRandom.addEventListener("click",(event)=>{
    
    let linkedListElemCount = linkedList.children.length;
    for(let i = 0;i<linkedListElemCount;i++)
    {
        linkedList.firstElementChild.remove();
    }
    for(let i=0;i<13;i++)
    {
        if(linkedList.children.length == 0)
        {
            let span = document.createElement("span");
            span.innerText = Math.ceil(Math.random() * (i+11));
            linkedList.append(span);
        }
        else
        {
            let span = document.createElement("span");
            span.innerText = Math.ceil(Math.random() * (i+11));
            let img = document.createElement("img");
            img.src = "../../Images/arrow.png";
            linkedList.append(img);
            linkedList.append(span);
        }
    }
    let p1 = document.createElement("p");
    p1.innerText = `Data generated successfully😉`;
    display.appendChild(p1);
    setTimeout(()=>{
        display.lastElementChild.remove();
    },2000);
});

flush.addEventListener("click",(event)=>{
    let linkedListElemCount = linkedList.children.length;
    if(linkedListElemCount == 0)
    {
        let p = document.createElement("p");
        p.innerText = `Stack has no element🙄🙄`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else{
        for(let i=0;i<linkedListElemCount;i++)
        {
            linkedList.firstElementChild.remove();
        }
        let p = document.createElement("p");
        p.innerText = `Stack flushed successfully😊😊😊`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
});