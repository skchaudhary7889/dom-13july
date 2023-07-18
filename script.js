// document.querySelector('.message').textContent = 'correct number'
// document.querySelector('.label-score').textContent = '23'
// document.querySelector('.number').textContent = '3'

let hideNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(hideNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess,typeof(guess));

  //there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No input ";
    document.querySelector("body").style.backgroundColor = "#e4df16";
  } else if (guess === hideNumber) {
    document.querySelector(".message").textContent = "Hurrah! Correct number ";
    document.querySelector(".number").textContent = hideNumber;
    document.querySelector("body").style.backgroundColor = "Orange";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== hideNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > hideNumber ? "Too high !" : "Too low !";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#222";
    } else {
      document.querySelector(".message").textContent = "You lost the game ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  hideNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".message").textContent = "Start guessing number....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
