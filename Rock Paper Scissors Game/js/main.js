const handOptions = {
  rock: "./images/icon-rock.svg",
  paper: "./images/icon-paper.svg",
  scissors: "./images/icon-scissors.svg",
};

let score = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelectorAll(".hands");
  hands.forEach((hand) => {
    hand.style.display = "none";
  });

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];

  let computerHand = computerPickHand();
  result(hand, computerHand);
};

const computerPickHand = () => {
  let hands = Object.keys(handOptions);
  const computerHand = Math.floor(Math.random() * 3);

  document.getElementById("computerPickImage").src =
    handOptions[hands[computerHand]];
  return hands[computerHand];
};

const result = (hand, computerHand) => {
  if (hand === "paper" && computerHand === "scissors") {
    msgResult("YOU LOSE!");
  }
  if (hand === "paper" && computerHand === "rock") {
    msgResult("YOU WIN!");
    scoreResult(score + 1);
  }
  if (hand === "paper" && computerHand === "paper") {
    msgResult("IT'S A DRAW!");
  }
  if (hand === "scissors" && computerHand === "scissors") {
    msgResult("IT'S A DRAW!");
  }
  if (hand === "scissors" && computerHand === "paper") {
    msgResult("YOU WIN!");
    scoreResult(score + 1);
  }
  if (hand === "scissors" && computerHand === "rock") {
    msgResult("YOU LOSE!");
  }
  if (hand === "rock" && computerHand === "paper") {
    msgResult("YOU LOSE!");
  }
  if (hand === "rock" && computerHand === "rock") {
    msgResult("IT'S A DRAW!");
  }
  if (hand === "rock" && computerHand === "scissors") {
    msgResult("YOU WIN!");
    scoreResult(score + 1);
  }
};

const msgResult = (msg) => {
  document.getElementById("msg-result").innerText = msg;
};

const scoreResult = (updatedScore) => {
  score = updatedScore;
  document.getElementById("score").innerText = score;
};

playAgain = () => {
  let hands = document.querySelectorAll(".hands");
  hands.forEach((hand) => {
    hand.style.display = "flex";
  });

  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};
