let button = document.getElementById('button');
let answer = [Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
let reset = true
let currentAnswer = answer[Math.floor(Math.random()*(answer.length-1))]
function submit() {
  let gameText = document.getElementById('gameText');
  let userName = document.getElementById('input');
  if (reset==true) {
    gameText.innerHTML = 'Hello ' + userName.value + '. This is Guess The Number. The game is simple. I will think of a random number between 0 and 100. Your goal is to try and guess it. If you get it wrong I will tell you if it is too high or too low. This will continue until you are able to guess the number. Are you ready? Give it a try.'
    button.innerHTML = 'Guess';
    reset = false;
  } else if (userName.value<currentAnswer){
    gameText.innerHTML = 'Sorry, but that was too low, try again';
    button.innerHTML = 'Guess';
  } else if (userName.value>currentAnswer){
    gameText.innerHTML = 'Nope, that guess is too high, try again';
    button.innerHTML = 'Guess';
  } else if (userName.value==currentAnswer){
    gameText.innerHTML = 'That is correct. Congrats! Wanna play again?'
    button.innerHTML = 'Reset'
    currentAnswer = answer[Math.floor(Math.random()*(answer.length-1))];
    reset = true;
  } 
}