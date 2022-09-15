
const totalScore = {playerScore: 0, computerScore: 0}

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  
  return rpsChoice[randomChoice]
}

function getResult(playerChoice, computerChoice) {
  
  let score;

  if(playerChoice == computerChoice) {
    score = 0
  } else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if(playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if(playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
    else {
      score = -1
    }
  
  return score
  
}

function showResult(score, playerChoice, computerChoice) {
  
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if(score == 1) {
    resultDiv.innerText = "You won!"
  } else if(score == 0) {
    resultDiv.innerText = "It's a tie!"
  } else if(score == -1) {
    resultDiv.innerText = "You lost!"
  }

  handsDiv.innerText = `you - ${playerChoice} VS robot - ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

function onClickRPS(playerChoice) {
  // console.log({playerChoice})
  const computerChoice = getComputerChoice()
  // console.log({computerChoice})
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  
  console.log({score})
  console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
}


function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  // console.log(rpsButtons)
  
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
  

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
}

function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''

  
}

playGame()