// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("Sane? Hang in there.");
  var player1 = "player1";
  var player2 = "player2";
  var currentPlayer = "player1";
  var addMove = 0;

  // alert('Add symbol here.');

  //switch players
  $('.col-xs-4').click(function() {
    if ($(this).hasClass('player1')|| $(this).hasClass('player2')) {
      $('#info').text("You clicked this already");
    } else {
      $(this).addClass(currentPlayer);
      console.log("New click!");
      switchItUp();
      checkWin();
      addMove++;
    }

    function switchItUp() {
      if(currentPlayer === "player1") {
        currentPlayer = player2;
        $('#info').text("Now O, you go!");
      } else {
        currentPlayer = player1;
        $('#info').text("Now X, your turn!");
      }
    }
  });

  function checkWin (){
    if ( $('#1').hasClass('playerOne') &&  $('#2').hasClass('playerOne') && $('#3').hasClass('playerOne') ){
      $('#1').addClass('win') && $('#2').addClass('win') && $('#3').addClass('win');
      alert('Player 1 is the winner!!');
    } else if ( $('#4').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#6').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#7').hasClass('playerOne') &&  $('#8').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#1').hasClass('playerOne') &&  $('#4').hasClass('playerOne') && $('#7').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#2').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#8').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#3').hasClass('playerOne') &&  $('#6').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#1').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#3').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#7').hasClass('playerOne') ){
        alert('Player 1 is the winner!!');
    } else if ( $('#4').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#6').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if ( $('#7').hasClass('playerTwo') &&  $('#8').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if ( $('#1').hasClass('playerTwo') &&  $('#4').hasClass('playerTwo') && $('#7').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if ( $('#2').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#8').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if ( $('#3').hasClass('playerTwo') &&  $('#6').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if ( $('#1').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if ( $('#3').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#7').hasClass('playerTwo') ){
        alert('Player 2 is the winner!!');
    } else if (moveCount === 8) {
        alert("It's a draw!");
    }
  };
  //reset button
  $('#myButton').click(function(){
    $('.col-xs-4').removeClass('player1 player2');
    addMove = 0;
    $("#info").text("New game!");
  });
});
