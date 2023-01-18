const choice = ["Rock", "Paper", "Scissors"]

let playerSelection = prompt("Rock, Paper, Scissors?")

let computerSelection = (function () {
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
})();
console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`)

let playerScore = 0
    let computerScore = 0
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        console.log("It's a draw!")
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
                (playerSelection == "Paper" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Rock")) {
        computerScore++
        console.log("Computer has won round!")
    } else {
        playerScore++
        console.log("Player has won round!")
    }
}

function game() {
    for (let i = 0; i <5; i++) {
        if (playerScore > computerScore) {
            console.log()
        }
    }
}