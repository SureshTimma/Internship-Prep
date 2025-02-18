let nameInput = document.getElementById("name");
let password =document.getElementById("password");

function signin(){
    let inputValue = nameInput.value;
    let verifyText = "Welcome " + inputValue;
    document.getElementById("verify").textContent= verifyText;
}