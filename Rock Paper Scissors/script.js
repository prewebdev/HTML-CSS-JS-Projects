const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["Rock", "Paper", "Scissors"];

function Game(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const getResult = (playerChoice, computerChoice) =>

        playerChoice === computerChoice ? "IT'S A TIE!" + String.fromCharCode(9785) :

    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")

    ? "YOU WIN!"
    : "YOU LOSE!";

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.style.backgroundColor = 
    result === "IT'S A TIE!" + String.fromCharCode(9785)
    ? "blue"
    : result === "YOU WIN!"
    ? "green"
    : "red";
    resultDisplay.style.border = "2px solid transparent"
    resultDisplay.style.color = "white";

}