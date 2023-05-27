'use strict';
const playGame = () => {
  const newGame = document.querySelector('.actualNewGame');
  const rollDice = document.querySelector('.rollDiceButton');
  const holdButton = document.querySelector('.holdButton');
  const dice = document.querySelectorAll('.dice');
  const dice1 = document.querySelector('.dicey1');
  const dice2 = document.querySelector('.dicey2');
  const dice3 = document.querySelector('.dicey3');
  const dice4 = document.querySelector('.dicey4');
  const dice5 = document.querySelector('.dicey5');
  const dice6 = document.querySelector('.dicey6');
  const tile1 = document.getElementById('firstTile');
  const tile2 = document.getElementById('secondTile');
  const player1CurrentScore = document.querySelector('.actualCurrentNumber1');
  const player2CurrentScore = document.querySelector('.actualCurrentNumber2');
  const playerOneScore = document.querySelector('.actualScore1');
  const playerTwoScore = document.querySelector('.actualScore2');
  const winner_text1 = document.querySelector('.winner-Text1');
  const winner_text2 = document.querySelector('.winner-Text2');
  let diceNumber;
  let player1Cur = 0; //player one's current score
  let player2Cur = 0; //player two's current score
  let currentPlayer = 1; // Variable to keep track of the current player
  let playing = true;

  const initializeGame = function () {
    player1CurrentScore.textContent = 0;
    playerOneScore.textContent = 0;
    player2CurrentScore.textContent = 0;
    playerTwoScore.textContent = 0;
    player1Cur = 0;
    player2Cur = 0;
    tile1.classList.remove('winner');
    tile2.classList.remove('winner');
    tile1.classList.remove('tileColor');
    tile2.classList.add('tileColor');
    winner_text1.textContent = '';
    winner_text2.textContent = '';
    playing = true;
    currentPlayer = 1;
    for (let i = 0; i < dice.length; i++) {
      dice[i].classList.remove('diceDisplay');
    }
  };

  // When the new game button is clicked
  newGame.addEventListener('click', initializeGame);

  // When the roll dice button is clicked
  rollDice.addEventListener('click', () => {
    if (playing) {
      diceNumber = Math.trunc(Math.random() * 6) + 1;

      const removeClass = () => {
        dice1.classList.remove('diceDisplay');
        dice2.classList.remove('diceDisplay');
        dice3.classList.remove('diceDisplay');
        dice4.classList.remove('diceDisplay');
        dice5.classList.remove('diceDisplay');
        dice6.classList.remove('diceDisplay');
      };
      removeClass();

      if (diceNumber === 1) {
        dice1.classList.add('diceDisplay');

        player1CurrentScore.textContent = 0;
        player2CurrentScore.textContent = 0;

        if (currentPlayer === 1) {
          tile1.classList.toggle('tileColor');
          tile2.classList.toggle('tileColor');
          player1Cur = 0;
          currentPlayer = 2;
        } else {
          tile1.classList.toggle('tileColor');
          tile2.classList.toggle('tileColor');
          player2Cur = 0;
          currentPlayer = 1;
        }
      } else {
        if (currentPlayer === 1) {
          player1Cur += diceNumber;
          player1CurrentScore.textContent = player1Cur;
        } else {
          player2Cur += diceNumber;
          player2CurrentScore.textContent = player2Cur;
        }

        switch (diceNumber) {
          case 2:
            dice2.classList.add('diceDisplay');
            break;
          case 3:
            dice3.classList.add('diceDisplay');
            break;
          case 4:
            dice4.classList.add('diceDisplay');
            break;
          case 5:
            dice5.classList.add('diceDisplay');
            break;
          case 6:
            dice6.classList.add('diceDisplay');
            break;
        }
      }
    }
  });

  // When the hold Button is clicked
  holdButton.addEventListener('click', () => {
    if (playing) {
      if (currentPlayer === 1) {
        tile1.classList.add('tileColor');
        tile2.classList.remove('tileColor');
        playerOneScore.textContent =
          Number(player1CurrentScore.textContent) +
          Number(playerOneScore.textContent);
        player1CurrentScore.textContent = 0;
        player2CurrentScore.textContent = 0;
        player1Cur = 0;
        currentPlayer = 2;
      } else {
        tile1.classList.remove('tileColor');
        tile2.classList.add('tileColor');
        playerTwoScore.textContent =
          Number(player2CurrentScore.textContent) +
          Number(playerTwoScore.textContent);
        player2CurrentScore.textContent = 0;
        player1CurrentScore.textContent = 0;
        player2Cur = 0;
        currentPlayer = 1;
      }
      winner();
    }
  });

  // Winner of the game function
  const winner = () => {
    if (playerOneScore.textContent >= 100) {
      tile1.classList.add('winner');
      tile2.classList.add('tileColor');
      winner_text1.textContent = 'winner';
      playing = false;
    } else if (playerTwoScore.textContent >= 100) {
      tile2.classList.add('winner');
      tile1.classList.add('tileColor');
      winner_text2.textContent = 'winner';
      playing = false;
    }
  };
};
playGame();
