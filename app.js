let button = document.querySelector("#translate-button")
let english = document.querySelector("#english-query");
let output = document.querySelector("#groot-output")
const url = "https://api.funtranslations.com/translate/groot.json"

let convertUrl= function(text){
    return url+"?"+"text="+text;
}
function errorHandler(err){
    console.log("error occurred", err);
}
button.addEventListener("click", clickEventListener);

function clickEventListener(){
    fetch(convertUrl(english.value))
    .then(response=>response.json())
    .then(json=>{
        output.innerText = json.contents.translated;
    }).catch(errorHandler);
    console.log(english);  
} 