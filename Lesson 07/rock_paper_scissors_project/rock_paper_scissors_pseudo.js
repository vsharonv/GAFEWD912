/* Goal: Play Rock, Paper, Scissors Pseudocode Simple Version*/

/* Have player A starts with scissors and player B starts with rock  */

document.querySelector('#submit').onclick = function (e) {
  e.preventDefault();
  let winner;
  let playerA = String(document.querySelector('#A').value);
  let playerB = String(document.querySelector('#B').value);

  let gameIsValid = false;

  // Ensure/check that BOTH player A and B choose from one of the 3 valid values
  if((playerA == "scissors" || playerA == "rock" || playerA == "paper") && (playerB == "scissors" || playerB == "rock" || playerB == "paper"))
  {
    gameIsValid = true;
  }
  // If even one player gives a bogus value, the game is invalid
  else
  {
    gameIsValid = false;
  }
  
  if(gameIsValid)
  {
    DetermineWinner(playerA, playerB);
    // Call more logic if needed
  }
  else
  {
    alert("You did something wrong!");
  }
}

function DetermineWinner(playerA, playerB)
{
    let winner;
    /* If player A and B is ==, return "tie" */
    if(playerA == playerB)
    {
      winner = "TIE";
    }
    /* If player A == "scissors" and B == "rock", return "B is a winner" else return "A is a winner" */
    else if(playerA == "scissors")
    {
      if(playerB == "rock")
      {
        winner = "B";
      }
      else
      {
        winner = "A";
      }
    }
    /* If player A == "rock" and B == "paper", return "B is a winner" else return "A is a winner" */
    else if(playerA == "rock")
    {
      if(playerB == "paper")
      {
        winner = "B";
      }
      else{
        winner = "A";
      }
    }
    /* If player A == "paper" and B == "scissors", return "B is a winner" else return "A is a winner" */
    else if(playerA == "paper")
    {
      if(playerB == "scissors")
      {
        winner = "B";
      }
      else{
        winner = "A";
      }
    }

    document.querySelector('#resultGame').innerText = winner;
}

