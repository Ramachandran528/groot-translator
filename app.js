const inputTxt=document.querySelector("#inputtxt");
const outputTxt=document.querySelector("#outputtxt");
const btnTranslate=document.querySelector("#translate");
const url="https://api.funtranslations.com/translate/groot.json";

function createUrl(text)
{
    return url+"?text="+text;
}

function errorHandler(error)
{
    alert("OOps An Server error has occured");
}

btnTranslate.addEventListener("click",function()
{
    fetch(createUrl(inputTxt.value))
    .then(response => response.json())
    .then(data => outputTxt.innerText=data.contents.translated)
    .catch(errorHandler);
})