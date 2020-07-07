var uWin = 0;
var cWin = 0;

function playRound(playerSelect, computerSelect){

    document.getElementById("userselect").textContent = playerSelect
    document.getElementById("cpuselect").textContent = computerSelect

    if (playerSelect == computerSelect){
        console.log("Its a draw! Both selected " + playerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
        return 0
    } else if (computerSelect == 'rock'){
        if (playerSelect == 'scissors') {
            cWin++;
            console.log("You Lose! " + computerSelect + " beats " + playerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
            return -1
        } else {
            uWin++
            console.log("You Win! " + playerSelect + " beats " + computerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
            return 1
        }
    } else if (computerSelect == 'paper'){
        if (playerSelect == 'rock') {
            cWin++
            console.log("You Lose! " + computerSelect + " beats " + playerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
            return -1
        } else {
            uWin++
            console.log("You Win! " + playerSelect + " beats " + computerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
            return 1
        }
    } else {
        if (playerSelect == 'paper') {
            cWin++
            console.log("You Lose! " + computerSelect + " beats " + playerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
            return -1
        } else {
            uWin++
            console.log("You Win! " + playerSelect + " beats " + computerSelect + "\nComputer: " + cWin + "\nUser: " + uWin)
            return 1
        }
    } 

    

}

function computerPlay(){
    var select = Math.round(Math.random()*3)

    if (select == 1){
        return 'rock';
    } else if (select == 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}       

function game(tempPrompt){

    const gamesToPlay = parseInt(tempPrompt, 10)

    var gamesPlayed = 0

    var user = 0
    var cpu = 0
    var draw = 0
    var result = 0

    document.getElementById("gameamount").textContent = tempPrompt
    document.getElementById("buttons").style.display = "block";


    const buttons = document.querySelectorAll('button')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelect = button.id;
            const computerSelect = computerPlay();

            // 1 = player win, -1 = cpu win, 0 = draw
            result = playRound(playerSelect, computerSelect)

            if (result == 1){
                user++
                document.getElementById("roundoutcome").textContent = "You win this round!"
            }else if (result == -1){
                cpu++
                document.getElementById("roundoutcome").textContent = "The computer wins this round!"
            }else if (result == 0){
                draw++
                document.getElementById("roundoutcome").textContent = "It's a draw!"
            }

            document.getElementById("userscore").textContent = user
            document.getElementById("cpuscore").textContent = cpu
            document.getElementById("drawscore").textContent = draw

            gamesPlayed++
            
            if (gamesPlayed == gamesToPlay){
                end(user, cpu)
            }
        })
    })
        
}

function start(){
  
    const tempPrompt = prompt("How many games do you want to play?")

    numCheck = Number(tempPrompt)

    console.log(numCheck)

    if (tempPrompt == null || tempPrompt == "" || Number.isInteger(numCheck) == false || numCheck < 1){
        start()
    }

    game(tempPrompt)

}

function end(user, cpu){

    if (user > cpu){
        document.getElementById("roundoutcome").textContent = "You win the game! :)"
    }else if (cpu > user){
        document.getElementById("roundoutcome").textContent = "You lost the game. :("
    }else if (cpu == user){
        document.getElementById("roundoutcome").textContent = "It's a draw. :|"
    }
    
    document.getElementById("refresh").style.display = "block";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("thanks").style.display = "block";

}

start();
