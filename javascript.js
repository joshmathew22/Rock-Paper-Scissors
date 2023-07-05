let userChoice

function getComputerChoice() {
    let arr = ["rock", "paper","scissors"]
    let random = arr[(Math.floor(Math.random() * arr.length))] 
    return random
}

function singleRound(player, computer){
    console.log("Computer Choice: " + computer)
    if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock"){
        return ("You Lose! " + computer + " beats " + player)
    }
    else if(computer == "rock" && player == "paper" || computer == "paper" && player == "scissors" || computer == "scissors" && player == "rock"){
        return ("You Won! " + player + " beats " + computer)
    }
    else{
        return ("tie")
    }
}

function game(){
    let userScore = 0
    let computerScore = 0
    let result
    while(userScore <=3 && computerScore <=3){
        userChoice = prompt("rock paper or scissors?")
        userChoice = userChoice.toLowerCase()
        result = singleRound(userChoice, getComputerChoice()) 
        if(result.includes("Won")){
            userScore++
            console.log(result)
        }
        else if(result.includes("Lose")){
            computerScore++
            console.log(result)
        }
        else{
            console.log(result)
        }
        console.log("User: " + userScore + " Computer: " + computerScore)
    }
    if(userScore > computerScore){
        console.log("User wins!!!!!!")
    }
    else{
        console.log("Computer wins!!!!!!")
    }
}

game()

