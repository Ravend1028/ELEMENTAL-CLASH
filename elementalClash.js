let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Fire') {
    if (computerMove === 'Water') {
      result = 'You lose.';
    } else if (computerMove === 'Earth') {
      result = 'You win.';
    } else if (computerMove === 'Fire') {
      result = 'Tie.';
    }

  } else if (playerMove === 'Water') {
    if (computerMove === 'Fire') {
      result = 'You win.';
    } else if (computerMove === 'Water') {
      result = 'Tie.';
    } else if (computerMove === 'Earth') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'Earth') {
    if (computerMove === 'Earth') {
      result = 'Tie.';
    } else if (computerMove === 'Fire') {
      result = 'You lose.';
    } else if (computerMove === 'Water') {
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
    computerMove = 'Fire';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Water';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Earth';
  }

  return computerMove;
}
