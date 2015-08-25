// jshint devel:true

console.log('Here we go!');

'use strict';

$(document).ready(function() {

  //Define players, gameboard, and other variables.
  var player1 = 'X';
  var player2 = 'O';
  var turn = 0;
  var player;
  var p1Moves = [];
  var p2Moves = [];

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

  //Switch between player1 and player2
  var picTurn = function() {
    if (turn % 2 == 0) {
      player = 'X';
    }
    else {
      player = 'O';
    }
    return player;

  };

  //Add moves for player1 or player2 arrays.
  var trackMoves = function(loc) {
    if (picTurn() == 'X') {
      p1Moves.push(loc);
    }
    else if (picTurn() == 'O') {
      p2Moves.push(loc);
    }
  };

  //get winner function here
  var getWinner = function() {
    winCombo.forEach(function(arr) {
      if (_.isEqual(arr, p1Moves)) {
        player1 = 'Winner';
        alert('X wins!');
      }
      else if (_.isEqual(arr, p2Moves)) {
        player2 = 'Winner';
        alert('O wins!');
      }
    })
  };

  //player chooses a space and undates game and html.

  $('.col-md-3').on('click', function(event) {
    trackMoves(event.target.id);
    picTurn;
    $(this).text(picTurn);
    turn++;
    console.log(turn, p1Moves, p2Moves);
    getWinner();
    //get winner call here
  });

});











//Keeping score

//reseting the board.
