/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

let gameBalls = document.querySelectorAll('.js-ball');

for (let b=0; b<gameBalls.length; b++)
{
  gameBalls[b].addEventListener('click', function(e){
    score = score + parseInt(e.target.getAttribute('data-increment'));

    if ( score < 100 ) {
      scoreEl.innerText = score;
    } else {
      declareWinner();
    }

  });

}

//arenaEl.addEventListener('click', function(e) {
 // if ( e.target.classList.contains('js-ball') ) {
  //  score += parseInt(e.target.dataset.increment);
  //  if ( score < 100 ) {
  //    scoreEl.innerText = score;
  //  } else {
  //    declareWinner();
  //  }
//  }
//})

function declareWinner() {
  document.body.classList.add('game-over');
}
