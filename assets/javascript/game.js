var crystal1 = "assets/images/crystal1.jpg";
var crystal2 = "assets/images/crystal2.jpg";
var crystal3 = "assets/images/crystal3.jpg";
var crystal4 = "assets/images/crystal4.jpg";


var crystals = [crystal1, crystal2, crystal3, crystal4];


var crystalIds = ["crystal1", "crystal2", "crystal3", "crystal4"]

      // MAJOR TASK #1: DYNAMICALLY CREATE CRYSTAL IMAGES as buttons
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < crystals.length; i++) {

        // Inside the loop...

        // 2. Create image tags
        var crystalBtn = $("<img>");

        // 3. adding attributes to the crystal images
        crystalBtn.attr("src", crystals[i]);
        crystalBtn.attr("id", crystalIds[i]);
        crystalBtn.attr("style", "width:120px; height:120px");

        
        // 4. Finally, append each crystal images
        $("#crystals").append(crystalBtn);

      }


      function compChoice(){
        var randScore = Math.floor(Math.random() * (101-35)) + 35;
        return randScore;
    
    }


      $("#randScore").text(compChoice());
