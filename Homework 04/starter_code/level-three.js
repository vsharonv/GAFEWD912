/*
 * DOTS: Level Three
 *
 */
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// A function to declare winner(game-over) 
function declareWinner()
{
  document.body.classList.add('game-over');
}

// adding an eventListener click to all the balls('.js-arena') and place an event target's 'data-increment' property that has the number of points the user should get for each ball. 

arenaEl.addEventListener('click', function(e)
{
  e.preventDefault();
  if (e.target.classList.contains('js-ball'))
  {

    let oldScore = parseInt(scoreEl.innerHTML);
    let newScore = oldScore + parseInt(e.target.dataset.increment);

    // Convert newScore to string with 0000 pads and display on the scoreboard
    // "0000"-> 0 + 10 -----> "00010"
    // "0000"-> 0 + 20 -----> "00020"
    let newScoreHTML = String(newScore).padStart(4,'0');
    scoreEl.innerHTML = newScoreHTML;
    
    if(newScore >= 100){
      declareWinner();
    }
  }
})