const choice = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll('button');

const infoText = document.querySelector('.info-text')

const computerScoreText = document.querySelector('.computer-score')

const playerScoreText = document.querySelector('.player-score')

let playerSelection= ""
let computerSelection = ""

let playerScore = 0
let computerScore = 0

//Button Press
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{

        playerSelection = button.id;
        computerSelection = randomChoiceGenerator()
        console.log(playerSelection)

        if (playerSelection == "reset"){
            resetGame()
        } else{
            document.getElementById('computer-image').src = `./images/computer-${computerSelection}.png`
            document.getElementById('player-image').src = `./images/player-${playerSelection}.png`

            displayScore(playerSelection, computerSelection)
            playRound(playerSelection, computerSelection);
        }

    })
})

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        infoText.textContent = "Draw!"
    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++
        computerScoreText.textContent = computerScore
    } else {
        playerScore++
        infoText.textContent = "Player won!"
        playerScoreText.textContent = playerScore
    }
}

function randomChoiceGenerator(){
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function resetGame() {
    infoText.textContent = "START"
    playerScore = 0
    computerScore = 0
    playerScoreText.textContent = playerScore
    computerScoreText.textContent = computerScore

}

function displayScore(playerSelection, computerSelection){
    document.getElementById('computer-image').src = `./images/computer-${computerSelection}.png`
}
