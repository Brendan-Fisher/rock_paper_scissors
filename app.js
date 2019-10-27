const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = documen.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function game(userChoice) {}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
}

main();
