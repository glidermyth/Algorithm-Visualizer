let inputField = document.querySelector("#numbers");
// console.dir(inputField);
let inputButton = document.querySelector(".inputContainer>button");
let data = "";
let numArray = [];
let temp="";

inputButton.addEventListener("click", () => {
    data = inputField.value;
    for(let i=0;i<data.length;i++)
    {
        if(data[i]!=",")
        {
            temp = temp.concat(data[i]);
        }
        else
        {
            numArray.push(parseInt(temp));
            temp="";
        }
    }
    console.log(numArray);
});
