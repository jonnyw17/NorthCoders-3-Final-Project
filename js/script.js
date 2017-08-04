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
setupPlanet('outer-space12', 300, 0.01607 );


$(document).ready(function(){

  //ZOOM STATE COUNTER 1/2/3
  var counter = 0;

  // NAVIGATION BAR - BUTTON ACTIVE FOR SOLAR SYSTEM ENGAGED AT COUNTER 0
  $('#solar-system3').addClass('btn-active');
  $('#astroid').addClass('active');
  counterTest = function (){
    if(counter === 0){
      $('#astroid').addClass('active');
      $('#planetInfo').fadeIn(0.1, function(){
        $('#planetInfo').css({'display' : 'relative'});
        $('#galaxyInfo').css({'display' : 'none'});
        $('#outerSpaceInfo').css({'display' : 'none'});
      });

      $('#solar-system2').removeClass('btn-active');
      $('#solar-system1').removeClass('btn-active');
      $('#solar-system3').addClass('btn-active');
      $('.galaxy').removeClass('active');
      $('.outer-space').removeClass('active');


    }else if (counter === 1){

      //planet info button fades out due to none relevance - too relevant button
      $('#galaxyInfo').fadeIn(0.1, function(){
        $('#galaxyInfo').css({'display' : 'relative'});
        $('#planetInfo').css({'display' : 'none'});
        $('#outerSpaceInfo').css({'display' : 'none'});
      });

      $('#astroid').removeClass('active');
       //navbar button state changed if condition is met to galaxy
      $('#solar-system3, #solar-system1').removeClass('btn-active');;
      $('#solar-system2').addClass('btn-active');
      //if zoom-out condition (counter 1) is met solar system 'zooms-out' galaxy 'zooms-in'
      $('#astroid').addClass('zoom-out');
      $('.galaxy').addClass('active');

  }else if(counter === 2){

      //planet info button fades out due to none relevance - too relevant button
      $('#outerSpaceInfo').fadeIn(0.1, function(){
        $('#outerSpaceInfo').css({'display' : 'relative'});
        $('#galaxyInfo').css({'display' : 'none'});
        $('#planetInfo').css({'display' : 'none'});
      });

      //navbar button state changed if condition is met (galaxy - outerspace)
      $('#solar-system2').removeClass('btn-active');
      $('#solar-system1').addClass('btn-active');

      //galaxy 'zooms out' outerspace galaxies appear
      $('.galaxy').removeClass('active');
      $('.outer-space').addClass('active');
      $('#zoom-in').on('click', function(){
        $('.galaxy').addClass('zoom-in');
        $('.outer-space').removeClass('active')
      });
   }
}

  // PLANET INFO TABS FADE IN TOGGLE SET FOR COUNTER 0
  $('#planetInfo').click(function(){
    $('#wiki-nav-click1, #wiki-nav-click2').fadeToggle(500)
  });
  // PLANET INFO TABS FADE IN TOGGLE SET FOR COUNTER 1
  $('#galaxyInfo').click(function(){
    $('#wiki-nav-click1, #wiki-nav-click2').fadeToggle(500)
  });
  // PLANET INFO TABS FADE IN TOGGLE SET FOR COUNTER 2
  $('#outerSpaceInfo').click(function(){
    $('#wiki-nav-click1, #wiki-nav-click2').fadeToggle(500)
  });

  // SET ZOOM STATES (COUNTER 0 = SOLAR SYSTEM, COUNTER 1 = GALAXY, COUNTER 2 = OUTERSPACE)
  $('#zoom-out').on('click', function() {
    if (counter >= 2) {
      return;
    };
    counter+=1;
    counterTest();
    console.log(counter)
  });

  $('#zoom-in').on('click', function(){
    if (counter <= 0) {
      return;
    };
    counter-=1;
    counterTest();
    console.log(counter)
  });
});

$('#galaxyInfo').on('click', function(){
  $('wiki-nav-click1, wiki-nav-click2').css({'display' : 'none'});
  $('galaxy-info-tab1, galaxy-info-tab2').fadeTo(500);
});
