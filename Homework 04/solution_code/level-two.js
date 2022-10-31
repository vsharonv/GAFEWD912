/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

let gameBalls = document.getElementsByClassName('js-ball');

console.log(gameBalls);

for (let b=0; b<gameBalls.length; b++){
  gameBalls[b].addEventListener('click', function(e){
    score += 10;
    if ( score < 100 ) {
      scoreEl.innerText = score;
    } else {
      declareWinner();
    }
  })
}

//arenaEl.addEventListener('click', function(e) {
//  if ( e.target.classList.contains('js-ball') ) {
//    score += 10;
//    if ( score < 100 ) {
//      scoreEl.innerText = score;
//   } else {
//     declareWinner();
//    }
// }
//})

function declareWinner() {
  document.body.classList.add('game-over');
}
