// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() 
{
    
    let computerChoiceNumber = Math.ceil(Math.random()*3);
    if(computerChoiceNumber == 1)
    {
        return "scissors";
    } 
    else if(computerChoiceNumber == 2)
    {
        return "paper";
    } 
    else 
    {
        return "rock";
    }
};


//Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

function compare(me, opponent) 
{
    document.querySelector('#computerSelection').innerText = opponent;

    /* If me and opponent is ==, return "tie" */

    if(me === opponent)
    {
        return "TIE...Let's do it again!";
    } 

    /* If me == "scissors" and opponent == "rock", return "Computer Wins"
    else return "You Win!" */

    else if(me === "scissors")
    {
        if(opponent === "rock")
        {
           return "HaHa You Just Lost The Game!";
        }
        else
        {
            return "That Was My Mistake...";
        } 
    } 

    /* If me == "rock" and opponent == "paper", return "Computer Wins"
    else return "You Win!" */

    else if(me === "rock")
     {
        if(opponent === "paper")
        {
            return "HaHa You Just Lost The Game!";
        } 
        else
        {
            return "That Was My Mistake...";
        }
    }

    /* If me == "paper" and opponent == "scissors", return "Computer Wins"
    else return "You Win!" */

    else if(me === "paper")
    {
         if(opponent === "scissors")
        {
            return "HaHa You Just Lost The Game!";
        } 
        else
        {
            return "That Was My Mistake...";
        }
    } 

    else 
    {
        return "YOU're Absolutely Screwed";
    }
        
};


// Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html

document.querySelector('#scissors').addEventListener('click',function(e)
{
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    let result = compare("scissors",computerPlayerChoice);
    document.querySelector('#decision').innerHTML = result;
});

document.querySelector('#rock').addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    compare("rock",computerPlayerChoice);
    let result = compare("rock",computerPlayerChoice);
    document.querySelector('#decision').innerHTML = result;
});

document.querySelector('#paper').addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    compare("paper",computerPlayerChoice);
    let result = compare("paper",computerPlayerChoice);
    document.querySelector('#decision').innerHTML = result;
});

