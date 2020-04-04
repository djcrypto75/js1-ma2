// question 1
const myFunctionExpression = function () {
   console.log("Geir");
};
myFunctionExpression();

// question 2
const button = document.querySelector(".btn");
button.addEventListener("click", logClick);
function logClick() {
   console.log("I was clicked");
}

// question 3
const textInput = document.querySelector(".input");
textInput.addEventListener("keydown", callAfterAKeyIsPressed);
function callAfterAKeyIsPressed() {
   console.log("A key was pressed");
}

// question 4
const hoverOverButton = document.querySelector("button");
hoverOverButton.addEventListener("mouseover", addClass);
function addClass() {
   hoverOverButton.classList.add("hover");
}

// question 5
const hoverOverButton = document.querySelector("[data-animal='dog']");
hoverOverButton.addEventListener("mouseout", removeClass);
function removeClass() {
   hoverOverButton.classList.remove("hover");
}

// question 6
const dataAttribute = document.querySelectorAll("li");
for (let i = 0; i < dataAttribute.length; i++) {
   dataAttribute[i].addEventListener("mouseover", loadAnimals);
}

function loadAnimals(event) {
   const animalTag = event.target.dataset.animal;
   if (animalTag === "goose") {
      console.dir(dataAttribute[0].dataset.animal);
   } else if (animalTag === "frog") {
      console.dir(dataAttribute[1].dataset.animal);
   } else if (animalTag === "elephant") {
      console.dir(dataAttribute[2].dataset.animal);
   }
}

// question 7
const animal = "cow";
switch (animal) {
   case "cat":
      console.log("Meow");
      break;
   case "cow":
      console.log("Moo");
      break;
   case "bird":
      console.log("Tweet");
      break;
   default:
      console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function (sheep) {
   console.log(sheep);
});

// question 9
function timer() {
   console.log("Hello");
   if (counter === 5) {
      clearInterval(intervalId);
   }
   counter++;
}
let counter = 0;
const intervalId = setInterval(timer, 1500);

// question 10
const updateText = document.querySelector(".container");
function updateContainer() {
   updateText.innerHTML = "Text updated";
}
setTimeout(updateContainer, 2000);
