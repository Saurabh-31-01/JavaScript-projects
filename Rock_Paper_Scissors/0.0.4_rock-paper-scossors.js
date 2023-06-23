let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    playGame('rock');
  } else if (event.key === 's') {
    playGame('paper');
  } else if (event.key === 'd') {
    playGame('scissors');
  }

});


let isAutoplaying = false;
let intervalId;

// const autoPlay = () => {
// };

function autoPlay() {
  if (!isAutoplaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1500);

    isAutoplaying = true;
  } else {
    clearInterval(intervalId);
    isAutoplaying = false;
  }
}

function playGame(playerMove) {
  let comMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (comMove === "rock") {
      result = "you lose";
    } else if (comMove === "paper") {
      result = "you win";
    } else if (comMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (comMove === "rock") {
      result = "you win";
    } else if (comMove === "paper") {
      result = "Tie";
    } else if (comMove === "scissors") {
      result = "you lose";
    }
  } else {
    if (comMove === "rock") {
      result = "Tie";
    } else if (comMove === "paper") {
      result = "you lose";
    } else if (comMove === "scissors") {
      result = "you win";
    }
  }

  if (result === "you win") {
    score.wins++;
  } else if (result === "you lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-results").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `you <img src ="${playerMove}-emoji.png" class ="move-icon">
    
    <img src ="${comMove}-emoji.png" class ="move-icon">
    Computer `;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.wins}  Losses : ${score.losses}  Ties : ${score.ties}`;
}

function pickComputerMove() {
  const num = Math.random();

  let comMove = "";

  if (num >= 0 && num < 1 / 3) {
    comMove = "rock";
  } else if (num >= 1 / 3 && num < 2 / 3) {
    comMove = "paper";
  } else if (num >= 2 / 3 && num < 1) {
    comMove = "scissors";
  }
  return comMove;
}

let resetElement = document.getElementById('reset');

resetElement.addEventListener('click', () => {
  let divreset = document.querySelector('.js-add-reset');

  divreset.innerHTML = `<p>Are you sure you want to Reset ?  
  <button class = "yes style-yes" >Yes</button>
  <button class = "no style-yes">No</button>
  </p>`;

  let a = document.querySelector('.yes');
  let b = document.querySelector('.no');

  a.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    divreset.innerHTML = '';
  });

  b.addEventListener('click', () => {
    divreset.innerHTML = '';
  });
});
