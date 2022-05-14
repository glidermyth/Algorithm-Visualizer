const queue = document.querySelector(".Queue-container");
const display = document.querySelector(".display-container");
const insertBtn = document.querySelector(".Insert");
const deleteBtn = document.querySelector(".Delete");
const frontBtn = document.querySelector(".Front");
const backBtn = document.querySelector(".Back");
const isEmptyBtn = document.querySelector(".is-empty");
const inputField = document.querySelector("#data-field");

//  adding event listeners to buttons

insertBtn.addEventListener("click",(event)=>{
    if(inputField.value != "")
    {
        if(queue.childElementCount == 20)
        {
            let p = document.createElement("p");
            p.innerText = `Queue has no empty space left😔`;
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },2000);
        }
        else
        {
            let span = document.createElement("span");
            let p = document.createElement("p");
            span.innerText = inputField.value;
            p.innerText = `Data ${inputField.value} inserted😁`;
            queue.append(span);
            display.append(p);
            setTimeout(()=>{
                display.lastElementChild.remove();
            },1500);
        }
    }
});

deleteBtn.addEventListener("click",(event)=>{
    if(queue.childElementCount == 0)
    {
        let p = document.createElement("p");
        p.innerText = `Queue has no element to delete😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.innerText = `${queue.firstElementChild.textContent} deleted😊`;
        display.append(p);
        queue.firstElementChild.remove();
        setTimeout(()=>{
            display.lastElementChild.remove();
        },1500);
    }
});

frontBtn.addEventListener("click",(event)=>{
    if(queue.childElementCount == 0)
    {
        let p = document.createElement("p");
        p.innerText = `Queue has no element to show😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.textContent = `${queue.firstElementChild.textContent} is the front element.`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2500);
    }
});

backBtn.addEventListener("click",(event)=>{
    if(queue.childElementCount == 0)
    {
        let p = document.createElement("p");
        p.innerText = `Queue has no element to show😔`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2000);
    }
    else
    {
        let p = document.createElement("p");
        p.textContent = `${queue.lastElementChild.textContent} is the Last element.`;
        display.append(p);
        setTimeout(()=>{
            display.lastElementChild.remove();
        },2500);
    }
});

isEmptyBtn.addEventListener("click",(event)=>{
    let p = document.createElement("p");
    if(queue.childElementCount != 0)
    {
        p.innerText = `The queue is not empty.😎`;
        display.append(p);
    }
    else
    {
        p.innerText = `The queue is  empty.🙄You can see that clearly.`;
        display.append(p);
    }

    setTimeout(()=>{
        display.lastElementChild.remove();
    },2500);
});