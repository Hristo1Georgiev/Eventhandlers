//Opdracht: gebruik Eventhandlers
//Opdracht 1: Een click event vastmaken aan een button:

const bttn = document.querySelector("#mybutton");
bttn.addEventListener('click', function (event) {
    alert("button clicked")
});


//Opdracht 2:

const body = document.querySelector(".blue-background");
const bttnTwo = document.querySelector("#mybuttonTwo");
const changeBodyColor = () => {
    body.classList.add("red-background");
}
bttnTwo.addEventListener("click", changeBodyColor);

/*
Een andere manier geprobeerd- veel korter:

const bttnTwo = document.querySelector("#mybuttonTwo");
bttnTwo.addEventListener("click", function (event) {
    bttnTwo.parentElement.classList.add("red-background");
});
*/


//Opdracht 3: Javascript code van opdracht 2 en opdracht 3 zijn in conflict,dus ik
// heb een derde button gemaakt voor de derde opdracht. Nu is het overzichtelijk.

const bttnThree = document.querySelector("#mybuttonThree");
const toggleColor = () => {
    body.classList.toggle("red-background");
}
bttnThree.addEventListener("click", toggleColor);
