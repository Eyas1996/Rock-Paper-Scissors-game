// Access All Wanted Elements
let theRules = document.querySelector(".rules");
let showRules = document.querySelector(".rules-btn");
let hideRules = document.querySelector(".close");
let btns = document.querySelectorAll(".step-one div button");
let cardOne = document.querySelector(".step-one");
let cardTwo = document.querySelector(".step-two");
let again = document.querySelector(".again");
let myScoreElement = document.querySelector(".my-score");
let pcScoreElement = document.querySelector(".pc-score");
let myChoiceElement = document.querySelector(".my-choice");
let myChoiceImg = document.querySelector(".my-choice img");
let pcChoiceElement = document.querySelector(".pc-choice");
let pcChoiceImg = document.querySelector(".pc-choice img");
let resultSection = document.querySelector(".result");
let resultText = document.querySelector(".result-text");

// Show Rules
showRules.addEventListener("click", () => {
  theRules.style.display = "flex";
});

// Hide Rules
hideRules.addEventListener("click", () => {
  theRules.style.display = "none";
});

// // To Save the Picks in Var Onclick
let myPickName = "";
let myPickElemet = "";
let pcPickName = "";
let pcPickElemet = "";
let choices = [];
const myWinResults = [
  "scissorspaper",
  "scissorslizard",
  "paperrock",
  "paperspock",
  "rocklizard",
  "rockscissors",
  "lizardspock",
  "lizardpaper",
  "spockscissors",
  "spockrock",
];

// To Get the Choices onclick and display The next Card.
btns.forEach((ele) => {
  ele.onclick = () => {
    myPickElemet = ele;
    myPickName = ele.className;
    pcPickElemet = btns[Math.floor(Math.random() * btns.length)];
    pcPickName = btns[Math.floor(Math.random() * btns.length)].className;
    choices = [myPickName, pcPickName];
    cardOne.style.display = "none";
    displayChoices();
  };
});

// Get and display the Choices
function displayChoices() {
  // Show my Choice
  myChoiceElement.style.visibility = "visible";
  myChoiceElement.className = myPickName;
  myChoiceImg.src = `./images/icon-${myPickName}.svg`;
  myChoiceImg.alt = `${myPickName}`;
  //  Show The Second Card
  setTimeout(() => {
    cardTwo.style.display = "block";
    pcChoiceElement.style.visibility = "visible";
  }, "500");
  // Show PC Choice
  setTimeout(() => {
    pcChoiceElement.className = pcPickName;
    pcChoiceImg.src = `./images/icon-${pcPickName}.svg`;
    pcChoiceImg.alt = `${pcPickName}`;
  }, "1100");
  // Show Restul Section Choice
  setTimeout(() => {
    resultSection.style.visibility = "visible";
    updateScores();
  }, "2000");
  // Show The Main Card and Hide The Second Card Onclick
  again.addEventListener("click", () => {
    cardOne.style.display = "flex";
    cardTwo.style.display = "none";
    pcChoiceElement.className = "";
    pcChoiceImg.src = ``;
    pcChoiceImg.alt = ``;
    resultSection.style.visibility = "hidden";
  });
}

// To Save the Scores
let myScore = 0;
let pcScore = 0;

function updateScores() {
  if (myPickName === pcPickName) {
    resultText.textContent = "it's a draw";
  } else if (myWinResults.includes(choices.join(""))) {
    resultText.textContent = "You Win!";
    myScore++;
    myScoreElement.textContent = myScore;
  } else {
    resultText.textContent = "You Lose!";
    pcScore++;
    pcScoreElement.textContent = pcScore;
  }
}
