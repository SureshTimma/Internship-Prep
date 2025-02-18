let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);


function checkGuess() {
    let userNum = parseInt(userInput.value);
    
    if (userNum>randomNum){
        gameResult.textContent = "Too Big";
    }
    else if (userNum<randomNum){
        gameResult.textContent = "Too Low";
    }
    else if (userNum === randomNum){
        gameResult.textContent = "You are Correct";
    }
}