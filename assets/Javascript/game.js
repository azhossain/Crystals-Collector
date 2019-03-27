$( document ).ready(function(){
    var Random=Math.floor(Math.random()*81+19) // Random Number should be  between 19 - 100
      
    $('#randomNumber').text(Random);
    
    var num1= Math.floor(Math.random()*9+1) // Random number has to be between 1 - 10
    var num2= Math.floor(Math.random()*9+1)  // Random number has to be between 1 - 10
    var num3= Math.floor(Math.random()*9+1)  // Random number has to be between 1 - 10
    var num4= Math.floor(Math.random()*9+1)  // Random number has to be between 1 - 10
    
    //Add sound for the activity.
  var jay = new Audio("./assets/sounds/success.mp3");
  var boo = new Audio("./assets/sounds/failure.mp3");
  var clicksound = new Audio("./assets/sounds/toggle_switch.mp3");
    
    //Initial value
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
    //  Decaring variables for tallis
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*81+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*9+1);
        num2= Math.floor(Math.random()*9+1);
        num3= Math.floor(Math.random()*9+1);
        num4= Math.floor(Math.random()*9+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds the wins to the userTotal
  function winner(){
  jay.play();
    alert("You won!");
    wins++; 
    
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
    boo.play();
    alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#one').on ('click', function(){
      clicksound.play();
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
              winner();
            
          }
          else if ( userTotal > Random){
            loser();
            
          }   
    })  
    $('#two').on ('click', function(){
      clicksound.play();    
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      clicksound.play();      
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      clicksound.play();      
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 