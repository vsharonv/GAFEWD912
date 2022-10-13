/*
 * DOTS: Level One
 *
 */

let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

// A function to declare winner(game-over) 
function declareWinner() {
  document.body.classList.add('game-over');
}

// Add eventListener click to a moving ball('.js-arena') and add a function that adds 10 to current scoreboard when the user clicks a moving ball.

ballEl.addEventListener('click', function(e)
{
  debugger;
  e.preventDefault();
  
  let oldScore = parseInt(scoreEl.innerHTML);
  let newScore = oldScore + 10;

  // Convert newScore to string with 0000 pads and display on the scoreboard
  // "0000"-> 0 + 10 -----> "00010"
  // "0000"-> 0 + 20 -----> "00020"
  let newScoreHTML = String(newScore).padStart(4,'0');
  scoreEl.innerHTML = newScoreHTML;

  // When the total newscore reaches 100 points, call declareWinner function.

  if(newScore >= 100){
    declareWinner();
  } 

})
