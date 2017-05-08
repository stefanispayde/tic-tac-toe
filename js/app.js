// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("Sane? Hang in there.");
  var player1 = "player1";
  var player2 = "player2";
  var currentPlayer = "player1";
  var addMove = 0;


  $('.col-xs-4').click(function() {
    if ($(this).hasClass('player1')|| $(this).hasClass('player2')) {
      $('#info').text("You clicked this already");
    } else {
      $(this).addClass(currentPlayer);
      console.log("New click!");
      switchItUp();
      whoWon();
      addMove++;
    }

    //switch players
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

  function whoWon (){
    if ( $('#1').hasClass('player1') &&  $('#2').hasClass('player1') && $('#3').hasClass('player1') ){
      $('#1').addClass('win') && $('#2').addClass('win') && $('#3').addClass('win');
      console.log('Player 1 is the winner!!');
      $("#info").text("New game!");
    } else if ( $('#4').hasClass('player1') &&  $('#5').hasClass('player1') && $('#6').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#7').hasClass('player1') &&  $('#8').hasClass('player1') && $('#9').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#1').hasClass('player1') &&  $('#4').hasClass('player1') && $('#7').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#2').hasClass('player1') &&  $('#5').hasClass('player1') && $('#8').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#3').hasClass('player1') &&  $('#6').hasClass('player1') && $('#9').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#1').hasClass('player1') &&  $('#5').hasClass('player1') && $('#9').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#3').hasClass('player1') &&  $('#5').hasClass('player1') && $('#7').hasClass('player1') ){
        console.log('Player 1 is the winner!!');
    } else if ( $('#4').hasClass('player2') &&  $('#5').hasClass('player2') && $('#6').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if ( $('#7').hasClass('player2') &&  $('#8').hasClass('player2') && $('#9').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if ( $('#1').hasClass('player2') &&  $('#4').hasClass('player2') && $('#7').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if ( $('#2').hasClass('player2') &&  $('#5').hasClass('player2') && $('#8').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if ( $('#3').hasClass('player2') &&  $('#6').hasClass('player2') && $('#9').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if ( $('#1').hasClass('player2') &&  $('#5').hasClass('player2') && $('#9').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if ( $('#3').hasClass('player2') &&  $('#5').hasClass('player2') && $('#7').hasClass('player2') ){
        console.log('Player 2 is the winner!!');
    } else if (addMove === 8) {
        console.log("CAT!");
    }
  };
  //reset button
  $('#myButton').click(function(){
    $('.col-xs-4').removeClass('player1 player2');
    addMove = 0;
    $("#info").text("New game!");
  });
});
