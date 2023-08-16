let userChoice
let userScore = 0
let computerScore = 0
function getComputerChoice() {
    let arr = ["rock", "paper","scissors"]
    let random = arr[(Math.floor(Math.random() * arr.length))] 
    return random
}

function singleRound(player, computer){
    //console.log("Computer Choice: " + computer)
    if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock"){
        return ("You Lose! " + computer + " beats " + player )
    }
    else if(computer == "rock" && player == "paper" || computer == "paper" && player == "scissors" || computer == "scissors" && player == "rock"){
        return ("You Won! " + player + " beats " + computer )
    }
    else{
        return ("tie")
    }
}

function score(result){
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
     return ("User: " + userScore + " Computer: " + computerScore)
}
function endGame(){
    if(userScore >4 || computerScore >4){
        return true;
    }
    return false;
}
function final(){
    if(userScore > computerScore){
        return ("User wins!!!!!!")
    }
    else{
        return ("Computer wins!!!!!!")
    }
}
function game(){
    let result
    let userChoice
    
    
    
    const r = document.querySelector('#rock')
    const p = document.querySelector('#paper')
    const s = document.querySelector('#scissors')

    const container = document.querySelector('#container')
    const div = document.createElement('div');
    div.textContent = 'Hello World!'

    container.appendChild(div)
    r.addEventListener('click', function(e){
        div.textContent = (singleRound(e.target.id, getComputerChoice()))  + "\n" +score(div.textContent)
        if(endGame()){
            div.textContent = final();
            return;
        }
    
    });
    p.addEventListener('click', function(e){
        div.textContent = (singleRound(e.target.id, getComputerChoice())) + "\n" +score(div.textContent)
        if(endGame()){
            div.textContent = final();
            return;
        }
    });
    s.addEventListener('click', function(e){
        div.textContent = (singleRound(e.target.id, getComputerChoice())) + "\n" +score(div.textContent)
        if(endGame()){
            div.textContent = final();
            return;
        }
    });
    
}

game()


