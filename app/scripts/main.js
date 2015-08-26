// jshint devel:true

console.log('Here we go!');

'use strict';

$(document).ready(function() {

  //Define players, gameboard, and other variables.
  var winner = undefined;
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
    if (turn % 2 === 0) {
      player = 'X';
    }
    else {
      player = 'O';
    }
    return player;

  };

  //Add moves for player1 or player2 arrays.
  var trackMoves = function(loc) {
    if (picTurn() === 'X') {
      p1Moves.push(loc);
      p1Moves.sort();
    }
    else if (picTurn() === 'O') {
      p2Moves.push(loc);
      p2Moves.sort();
    }
  };

  function checkForWinner(winningCombo, moves) {
    var result = _.includes(moves, winningCombo[0]) && _.includes(moves, winningCombo[1]) && _.includes(moves, winningCombo[2])
    console.log('checkForWinner returning', result, 'for moves', JSON.stringify(moves));
    return result;
  }

  //get winner function here
  var getWinner = function() {
    for (var i = 0; i < winCombo.length; i++) {
      var arr = winCombo[i];
      if (checkForWinner(arr, p1Moves)) {
        winner = 'X';
        alert('X wins!');
        console.log('=== X WINS ===');
        break;
      }
      else if (checkForWinner(arr, p2Moves)) {
        winner = 'O';
        alert('O wins!');
        console.log('=== O WINS ===');
        break;
      }
    }
    if (!winner && turn === 9) {
      alert('Tie');
      console.log('=== TIE ===');
    }
  };

  //player chooses a space and undates game and html.

  $('.col-md-3').on('click', function(event) {
    trackMoves(event.target.id);
    picTurn;
    $(this).text(picTurn).off('click');
    turn++;
    console.log(turn, p1Moves, p2Moves);
    getWinner();
    //get winner call here
  });

});











//Keeping score

//reseting the board.
