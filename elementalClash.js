let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'fire') {
    if (computerMove === 'water') {
      result = 'You lose.';
    } else if (computerMove === 'earth') {
      result = 'You win.';
    } else if (computerMove === 'fire') {
      result = 'Tie.';
    }

  } else if (playerMove === 'water') {
    if (computerMove === 'fire') {
      result = 'You win.';
    } else if (computerMove === 'water') {
      result = 'Tie.';
    } else if (computerMove === 'earth') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'earth') {
    if (computerMove === 'earth') {
      result = 'Tie.';
    } else if (computerMove === 'fire') {
      result = 'You lose.';
    } else if (computerMove === 'water') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'fire';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'water';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'earth';
  }

  return computerMove;
}
