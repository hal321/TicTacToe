let loop = 0;
let playerxCount = 0;
let playeroCount = 0;
let currentPlayer = "X";
let h1 = document.querySelector("h1");
let playerX = document.querySelector("#playerX");
let playerO = document.querySelector("#playerO");
let resetBtn = document.querySelector("#reset");
let playerxWin = document.querySelector(".playerx");
let playeroWin = document.querySelector(".playero");
let resetCount = document.querySelector("#resetCount");
let cells = document.querySelectorAll(".cell");
let gameBoard = document.querySelector("#gameBoard");

//this function withh start the game by listing to every cell click and call fill cells function
function startGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", fillCells, { once: true });
  });
}
//this function will mark the cells with either x and o and keep switching between them and will call check winner() whenever there is a winning pattern
function fillCells(e) {
  e.target.innerText = currentPlayer;
  e.target.classList.add("animate__animated", "animate__headShake");
  if (currentPlayer == "X") {
    playerX.style.borderBottom = "2px solid #e9c46a";
    playerO.style.borderBottom = "3px solid #a460ed";
    currentPlayer = "O";
    e.target.style.color = "#A460ED";
  } else {
    e.target.style.color = "#E94560";
    playerO.style.borderBottom = "2px solid #e9c46a";
    playerX.style.borderBottom = "3px solid #a460ed";
    currentPlayer = "X";
  }
  loop++;
  let c1 = document.querySelector("#c1");
  let c2 = document.querySelector("#c2");
  let c3 = document.querySelector("#c3");
  let c4 = document.querySelector("#c4");
  let c5 = document.querySelector("#c5");
  let c6 = document.querySelector("#c6");
  let c7 = document.querySelector("#c7");
  let c8 = document.querySelector("#c8");
  let c9 = document.querySelector("#c9");
  let cell1 = cells[0].innerText;
  let cell2 = cells[1].innerText;
  let cell3 = cells[2].innerText;
  let cell4 = cells[3].innerText;
  let cell5 = cells[4].innerText;
  let cell6 = cells[5].innerText;
  let cell7 = cells[6].innerText;
  let cell8 = cells[7].innerText;
  let cell9 = cells[8].innerText;

  if (cell1 !== "" && cell1 == cell2 && cell2 == cell3) {
    c1.classList.add("glow");
    c2.classList.add("glow");
    c3.classList.add("glow");
    checkWinner();
  } else if (cell4 !== "" && cell4 == cell5 && cell5 == cell6) {
    c4.classList.add("glow");
    c5.classList.add("glow");
    c6.classList.add("glow");
    checkWinner();
  } else if (cell7 !== "" && cell7 == cell8 && cell8 == cell9) {
    c7.classList.add("glow");
    c8.classList.add("glow");
    c9.classList.add("glow");
    checkWinner();
  } else if (cell1 !== "" && cell1 == cell4 && cell4 == cell7) {
    c1.classList.add("glow");
    c4.classList.add("glow");
    c7.classList.add("glow");
    checkWinner();
  } else if (cell2 !== "" && cell2 == cell5 && cell5 == cell8) {
    c2.classList.add("glow");
    c5.classList.add("glow");
    c8.classList.add("glow");
    checkWinner();
  } else if (cell3 !== "" && cell3 == cell6 && cell6 == cell9) {
    c3.classList.add("glow");
    c6.classList.add("glow");
    c9.classList.add("glow");
    checkWinner();
  } else if (cell1 !== "" && cell1 == cell5 && cell5 == cell9) {
    c1.classList.add("glow");
    c5.classList.add("glow");
    c9.classList.add("glow");
    checkWinner();
  } else if (cell3 !== "" && cell3 == cell5 && cell5 == cell7) {
    c3.classList.add("glow");
    c5.classList.add("glow");
    c7.classList.add("glow");
    checkWinner();
  } else if (loop === 9) {
    h1.innerText = "ITS A DRAW,,, TRY AGAIN";
    h1.classList.add("animate__animated", "animate__swing");
    h1.style.color = "#a460ed";
    gameBoard.classList.add("loose");
    playSound("lost");
  }
}
//whenever there is a winner this function will be called
function checkWinner() {
  if (currentPlayer === "X") {
    playeroCount++;
    playeroWin.innerText = playeroCount;
    playerO.classList.add("animate__animated", "animate__tada");

    cells.forEach((cell) => {
      cell.removeEventListener("click", fillCells);
    });
  } else if (currentPlayer === "O") {
    playerxCount++;
    playerxWin.innerText = playerxCount;
    playerX.classList.add("animate__animated", "animate__tada");

    cells.forEach((cell) => {
      cell.removeEventListener("click", fillCells);
    });
  }
}
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.volume = 0.1;
  audio.play();
}
//a function that will loop through all the cells and remove the glow effect  i will be called in the reset function
function removeGlow() {
  cells.forEach((cell) => {
    cell.classList.remove("glow");
  });
}
//this function will reset the score count
resetCount.addEventListener("click", resetCountSpans);
function resetCountSpans() {
  if (playerxCount > playeroCount) {
    h1.innerText = `X score is: ${playerxCount}
    O score is: ${playeroCount} Player X Won`;
    playSound("win");
    h1.classList.add("animate__animated", "animate__swing");
    h1.style.color = "#a460ed";
  } else if (playerxCount < playeroCount) {
    h1.innerText = `X score is: ${playerxCount}
    O score is: ${playeroCount} Player O Won`;
    playSound("win");
    h1.classList.add("animate__animated", "animate__swing");
    h1.style.color = "#E94560";
  } else if (
    playerxCount == playeroCount &&
    playerxCount !== 0 &&
    playeroCount !== 0
  ) {
    h1.innerText = "Its a Tie";
    h1.classList.add("animate__animated", "animate__swing");
    h1.style.color = "#a460ed";
  }
  playerxCount = 0;
  playeroCount = 0;
  playeroWin.innerText = playeroCount;
  playerxWin.innerText = playerxCount;
}
//this function will reset all the default values and will call startGame() again
resetBtn.addEventListener("click", reset);
function reset() {
  cells.forEach((cell) => {
    cell.innerText = " ";
    cell.classList.remove("animate__animated", "animate__headShake");
  });
  currentPlayer = "X";
  playerX.style.borderBottom = "3px solid #a460ed";
  playerO.classList.remove("animate__animated", "animate__tada");
  playerX.classList.remove("animate__animated", "animate__tada");
  gameBoard.classList.remove("loose");
  h1.classList.remove("animate__animated", "animate__swing");
  h1.innerText = "Tic-Tac-Toe";
  h1.style.color = "#E8AA42";
  removeGlow();
  loop = 0;
  startGame();
}
startGame();
