const option = ["rock", "paper", "scissor"]; 
var playerScore = 0;
var computerScore = 0;
var playerSelection = "";
var Round_winner = "";
function computerPlay(){ 
  return option[Math.floor(Math.random()*option.length)] 
}; 

function playRound(playerSelection, computerSelection) { 
  if(playerSelection == computerSelection){ 
    Round_winner = "Tied game";
  } else if
  ((computerSelection == "rock" && playerSelection == "scissor") || 
    (computerSelection == "scissor" && playerSelection == "paper") || 
    (computerSelection == "paper" && playerSelection == "rock")){
    computerScore++; 
    Round_winner = "You lost";
  }else if 
  ((playerSelection == "rock" && computerSelection == "scissor") || 
  (playerSelection == "scissor" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock") ){
    playerScore++;
    Round_winner = "You won";
  }
}; 

//UI
const display = document.querySelector(".display_round");
const round_result = document.getElementById("round_result");
const rock_btn = document.querySelector(".rock-btn");
const paper_btn = document.querySelector(".paper-btn");
const scissor_btn = document.querySelector(".scissor-btn");
const player_score = document.querySelector('#player_score');
const comp_score = document.querySelector('#comp_score');
const player_pick = document.querySelector(".playerPick");
const comp_pick = document.querySelector(".compPick");
const playerPickIcon = document.querySelector(".playerPick");
const compPickIcon = document.querySelector(".compPick");
const endgameModal = document.querySelector(".modal-bg");
const modalTxt = document.querySelector(".annouceWinner");
const restartBtn = document.querySelector(".restart-btn");

rock_btn.addEventListener('click', () => game("rock"));

paper_btn.addEventListener('click', () => game("paper"));

scissor_btn.addEventListener('click', () => game("scissor"));

restartBtn.addEventListener('click', () => restart());

function gameover(){
  return playerScore == 5 || computerScore == 5;
};

function game(playerSelection){
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateRound();
  updatePick(playerSelection, computerSelection);
  if(gameover()){
    if(playerScore == 5){
      modalActivate();
      modalTxt.textContent = "YOU WON";
    }else if(computerScore == 5){
      modalActivate();
      modalTxt.textContent = "YOU LOST";
    }
  }
};

function updateRound(){
  round_result.textContent = Round_winner;
  player_score.textContent = `Player: ${playerScore}`;
  comp_score.textContent = `Computer: ${computerScore}`;
};

function updatePick(playerSelection, computerSelection){
  if(playerSelection == 'rock'){
    playerPickIcon.src="./imgs/rock.png"; 
  }else if(playerSelection == 'paper'){
    playerPickIcon.src="./imgs/paper.png";
  }else{
    playerPickIcon.src="./imgs/scissors.png";
  }

  if(computerSelection == 'rock'){
    compPickIcon.src="./imgs/rock.png";  
  }else if(computerSelection == 'paper'){
    compPickIcon.src="./imgs/paper.png";
  }else{
    compPickIcon.src="./imgs/scissors.png";
  }
};

function modalActivate(){
  endgameModal.classList.add('bg-activate');
};

function restart(){
  playerScore = 0;
  computerScore = 0;
  round_result.textContent = '❔';
  player_score.textContent = `Player: ${playerScore}`;
  comp_score.textContent = `Computer: ${computerScore}`;
  endgameModal.classList.remove('bg-activate');
  playerPickIcon.src="";
  compPickIcon.src="";
};