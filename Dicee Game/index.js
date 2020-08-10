function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var randomNumber1 = generateRandomInteger(1, 6);  
var randomNumber2 = generateRandomInteger(1, 6);  

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player 1 wins";
else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player 2 wins🚩";
else
    document.querySelector("h1").textContent = "Draw!";