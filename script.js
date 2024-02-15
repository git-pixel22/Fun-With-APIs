
const button = document.querySelector("#submit");
const input = document.querySelector("#userInput");


button.addEventListener('click', function(){

console.log("script started");
const apiUrl = `https://api.github.com/users/`+`${input.value}`;
console.log(apiUrl);
const element = document.querySelector(".card");

const req = new XMLHttpRequest();

req.open('GET', apiUrl);

req.onreadystatechange = function(){
    if(req.readyState === 4){
        const data = JSON.parse(this.responseText);
        element.innerHTML = 
        `
        <div>
            <img src = "${data.avatar_url}" height="50px" width="50px">
        </div>
        <div>
            <p>${data.name}<p>
        </div>
        <div>
            <p>${data.followers}<p>
        </div>
        `
    }
}

req.send();
})