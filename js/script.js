function enablebtn( id ){
  $('#btn-'+id+'-enable').click(function(){
    $("#"+id+"").toggleClass('active');
  });
}

function positionPlanet( id, radius, current_a , speed ){

  var new_angle = current_a + speed;

  var newLeft = Math.floor(0 + (radius * Math.cos(new_angle)));
  var newTop = Math.floor(radius + (radius * Math.sin(new_angle)));


  $('#'+id).animate({
      top: newTop,
      left: newLeft,
  }, 1, function() {
      positionPlanet( id, radius, new_angle , speed );
  });

}

function setupPlanet( id , radius, speed ){

  enablebtn(id);
  positionPlanet(id, radius, 0,speed);

}

setupPlanet('neptune', 500, 0.00182 );
setupPlanet('uranus', 450, 0.00228 );
setupPlanet('saturn', 395, 0.00323 );
setupPlanet('jupiter', 320, 0.00434 );
setupPlanet('mars', 260, 0.00802 );
setupPlanet('earth', 230, 0.01 );
setupPlanet('venus', 190, 0.01174 );
setupPlanet('mercury', 160, 0.01607 );
setupPlanet('outer-spacee', 300, 0.01607 );


$(document).ready(function(){

  //ZOOM STATE COUNTER 1/2/3
  var counter = 0;



  // BUTTON BAR ACTIVE CLASS ENGAGED AT COUNTER 0
  if(counter === 0){
    $('#solar-system3').addClass('btn-active');
    // $('.galaxy').addClass('active');
  }

  counterTest = function (){
   if (counter === 1){
     //navbar button state changed if condition is met
    $('#solar-system3').removeClass('btn-active');
    $('#solar-system2').addClass('btn-active');
    //if zoom-out condition is met solar system 'zooms-out'
    $('#astroid').addClass('zoom-out');
    $('.galaxy').addClass('active');
    //planet info button fades out due to none relevance
    $('#planet-info').fadeOut(1000, function(){
    $('#planet-info').css({'display' : 'none'})
    });



    //if zoom-in is triggered solar system reappears/galaxy fade out setting back to state 1(solar system)
    // $('#zoom-in').on('click', function(){
    //   $('#astroid').addClass('zoom-in');
    //   $('.galaxy').removeClass('active')
    //   $('#solar-system3').removeClass('btn-active');
    //   $('#solar-system2').addClass('btn-active');
    // });

  }else if(counter === 2){
    //navbar button state changed if condition is met (galaxy - outerspace)
      $('#solar-system2').removeClass('btn-active');
      $('#solar-system1').addClass('btn-active');
      //galaxy 'zooms out' outerspace galaxies appear
      $('.galaxy').removeClass('active');
      $('.outer-space').addClass('active');
      $('#zoom-in').on('click', function(){
        $('.galaxy').addClass('zoom-in');
        $('.outer-space').removeClass('active')
        $('#solar-system3').removeClass('btn-active');
        $('#solar-system2').addClass('btn-active');
      });

  // }else if(counter === 3){
  //     //galaxy 'zooms out' outerspace galaxies appear
  //     // $('.galaxy').removeClass('active');
  //     // $('.outer-space').addClass('active');
  //
   }
}

  // PLANET INFO TABS FADE IN TOGGLE SET FOR COUNTER 0
  $('#planet-info').click(function(){
    $('#wiki-nav-click1, #wiki-nav-click2').fadeToggle(500)
  });

  // SET ZOOM STATES (COUNTER 0 = SOLAR SYSTEM, COUNTER 1 = GALAXY, COUNTER 3 = OUTERSPACE)
  $('#zoom-out').on('click', function() {


    if (counter >= 2) {

      return
    };

    counter+=1;
    counterTest();

  });

  $('#zoom-in').on('click', function(){
    counter-=1;
    counterTest();

  });
});
