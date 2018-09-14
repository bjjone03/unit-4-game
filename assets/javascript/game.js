var random_result;
var lost =0;
var win =0;
var previous_num =0;
var your_score;
var crystal1 = "assets/images/crystal1.jpg";
var crystal2 = "assets/images/crystal2.jpg";
var crystal3 = "assets/images/crystal3.jpg";
var crystal4 = "assets/images/crystal4.jpg";


var resetAndSart = function () {
  $(".crystals").empty();
  var images = ['assets/images/crystal1.jpg','assets/images/crystal2.jpg','assets/images/crystal3.jpg','assets/images/crystal4.jpg']
    

random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + random_result);
for(var i = 0; i < 4; i++){
  var random = Math.floor(Math.random() * 11) + 1;
  

  var crystal = $("<div>");
      crystal.attr({
        "class":'crystal',
        "data-random": random

      });
      crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"
      });


  $(".crystals").append(crystal);
    }

}
resetAndSart();



 $(document).on('click', ".crystal", function () {

    
    var num = parseInt($(this).attr('data-random')); 

    previous_num += num;
    $("#your_number").html('Your Score: '+ previous_num);
    
    if (previous_num > random_result){
        lost--;
        $("#lost").html('lost: '+ lost);
        resetAndSart();
    }
    else if (previous_num === random_result){
        win++;
        $("#win").html('win: '+ win);
        resetAndSart();
    }
    
});



