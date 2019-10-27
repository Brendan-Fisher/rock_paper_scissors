let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Generate random computer choice
function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Function called when player beats computer, increments user score and prints win message
function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    comp
  )}. You win!`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("green-glow");
  }, 500);
}

// Function called when computer beats user, increments comp score and prints lose message
function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(user)} is defeated by ${convertToWord(
    comp
  )}. You lose!`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("red-glow");
  }, 500);
}

// Function called when theres a tie, no score change, prints draw message
function draw(user, comp) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(user)} ties ${convertToWord(
    comp
  )}. There's a draw!`;
  document.getElementById(user).classList.add("gray-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("gray-glow");
  }, 500);
}

// Converts user and comp choices to words
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

// Actual game play
function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

// User functionality
function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
