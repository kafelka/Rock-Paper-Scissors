// Variables we need for the game
var choices = ["rock", "paper", "scissors"];
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

// Listen for the button clicks
// $("#rock").click(function(event) {
//   var move_you = "rock";
//   $("#play_you").text(move_you);
//   var play_machine = computer_move();
//   compare(move_you, play_machine);
//   });
//
// $("#paper").click(function(event) {
//   var move_you = "paper";
//   $("#play_you").text(move_you);
//   var play_machine = computer_move();
//   compare(move_you, play_machine);
// });
//
// $("#scissors").click(function(event) {
//   var move_you = "scissors";
//   $("#play_you").text(move_you);
//   var play_machine = computer_move();
//   compare(move_you, play_machine);
// });

$("button").click(function(event) {
  var move_you = this.getAttribute("value");
  var theColorIs = $(this).attr("class");
  $("#play_you").html('<button id="paper" class="'+ theColorIs +'"><img class="img-fluid" src="images/'+ move_you + '.jpg" alt="An image of '+ move_you +'." /></button>')
  var play_machine = computer_move();
  compare(move_you, play_machine);
});


function computer_move() {
  var play_machine = Math.floor(Math.random() * 3);

  play_machine = choices[play_machine];
  // $("#play_machine").text(play_machine);

  var compColor = $("#" + play_machine).attr("class");
  $("#play_machine").html('<button id="paper" class="'+ compColor +'"><img class="img-fluid" src="images/'+ play_machine + '.jpg" alt="An image of '+ play_machine +'." /></button>')
  console.log("move " + play_machine);

  // $("#game_won").empty();
  // $("#game_lost").empty();
  // $("#game_draw").empty();

  return play_machine;
}

function compare(you, machine){

  var verdict = 'lose';
  // $("#verdict").css("color", "red");


  if ( you == machine ) {
    verdict = 'draw';
    // $("#verdict").css("color", "rgb(23, 16, 203)");

  }
  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
    // $("#verdict").css("color", "green");
  }
  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }
  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  $("#verdict").html('<img class="img-fluid img-result" src="images/'+ verdict +'.gif" alt="An image of '+ verdict +'." />');

  // switch (you) {
  //   case (you == machine):
  //     verdict = 'draw';
  //   break;
  //   case (you == "rock"):
  //   case (machine == "scissors"):
  //     verdict = 'win';
  //   break
  //   case ((you == "paper") && (machine == "rock")):
  //     verdict = 'win';
  //   break;
  //   case ((you == "scissors") && (machine == "paper")):
  //     verdict = 'win';
  //   break;
  // }

  switch (verdict) {
    case "win":
      won++;
      $("#game_won").text(won);
    break;
    case "lose":
      lost++;
      $("#game_lost").text(lost);
    break;
    case "draw":
      draw++;
      $("#game_draw").text(draw);
    break;
}

  // if ( verdict == 'win') {
  //   won++;
  //   $("#game_won").text(won);
  // }
  // if ( verdict == 'lose') {
  //   lost++;
  //   $("#game_lost").text(lost);
  // }
  // if ( verdict == 'draw') {
  //   draw++;
  //   $("#game_draw").text(draw);
  // }


  // $("#verdict").text(verdict);
  // $("#verdict").html(verdict);

  played++;
  $("#game_played").text(played);

}
