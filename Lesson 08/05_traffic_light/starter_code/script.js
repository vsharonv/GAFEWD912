// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// function that turns off all the lights
function turnOff(){
  document.querySelector('#stopLight').classList.remove('stop');

  document.querySelector('#slowLight').classList.remove('slow');

  document.querySelector('#goLight').classList.remove('go');

}



// Go function
function go(){
  turnOff();
  document.querySelector('#goLight').classList.add('go');
}


// Slow function
function slow(){
  turnOff();
  document.querySelector('#slowLight').classList.add('slow');
}


// Stop Function
function stop(){
  turnOff();
  document.querySelector('#stopLight').classList.add('stop');
}


// Bind to clicks
  document.querySelector('#stopButton').addEventListener('click',stop);
  document.querySelector('#slowButton').addEventListener('click',slow);
  document.querySelector('#goButton').addEventListener('click',go);
