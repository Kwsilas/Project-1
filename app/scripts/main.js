// jshint devel:true

console.log('Here we go!');
'use strict'

//Define players, gameboard, and other variables.
//var player1 = 'x';
//var player2 = 'o';

var gameboard = [
  ['b1', 'b2', 'b3'],
  ['b4', 'b5', 'b6'],
  ['b7', 'b8', 'b9']
];

var winCombo = [
  ['b1', 'b2', 'b3'],
  ['b4', 'b5', 'b6'],
  ['b7', 'b8', 'b9'],
  ['b1', 'b4', 'b7'],
  ['b2', 'b5', 'b8'],
  ['b3', 'b6', 'b9'],
  ['b1', 'b5', 'b9'],
  ['b3', 'b5', 'b7']
];

$(document).ready(function() {
  //player chooses a space and undates html.
  var turn = 0;
  $('#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9')
    .click(function() {
      var box = $(this);
      if (turn == 0) {
        turn = 1;
        box.text('X');
      }
      else {
        turn = 0;
        box.text('O');
      }
    });
});


//Determine when either player1 or player2 wins.

function playerWins() {
  if ('X' == winCombo[]);
  alert('X wins!')
 }
  {else if ('O' == winCombo[]);
  alert('O wins!')
 }
  else alert('Tie.');
  }
};


//Switch between player1 and player2

//Keeping score

//reseting the board.
