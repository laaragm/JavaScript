//Higher-order functions are functions that operate on other functions, either by
//taking them as arguments or by returning them

//A callback function allows us to wait for something to finish happening. For example
//waiting for a click event, and then the callback function gets called back and executed

function makeSound(key){        
    switch(key){
        case "w":  
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":  
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":  
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":  
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":  
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":  
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":  
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

//Detecting button press 
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++){
    //function(){} is an anonymous function
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //this is basically the identity of the button that triggered the event listener
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard press 
//You can add an event listener to the entire document, so that the entire
//web page starts listening for keyboard strokes.
//When our function gets triggered there's also the option to pass in a parameter
//and we can call that parameter event and basically it allows us to tap into
//the event that triggered the event listener.
document.addEventListener("keydown", function(event){
    //the property "key" tells us which keyboard key was pressed 
    makeSound(event.key);
    buttonAnimation(event.key);
});