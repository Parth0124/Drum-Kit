var numberOfDrumButtons= document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick()
{
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
}
);

function makeSound(key)
{
    switch (key) 
    {
        case "w":
            var tom1 = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d":
            var tom4 = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var snare = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/crash.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("/Users/parthabhang/Desktop/WEBDEV/Drum Kit/sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(removeAnimation, 100);
    function removeAnimation()
    {
        activeButton.classList.remove("pressed");
    }
}