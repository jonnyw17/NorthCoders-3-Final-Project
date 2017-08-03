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

var counter = 0;

  $('#planet-info').click(function(){
    $('#wiki-nav-click1, #wiki-nav-click2').fadeToggle(500)
  });

  $('#zoom-out').on('click', function(){
    counter++;
    $('#astroid').addClass('zoom-out');
    $('.galaxy').addClass('active');
    $('#planet-info').fadeOut(1000, function(){
      $('#planet-info').css({'display' : 'none'})
    })
    if(counter === 1){
        $('#zoom-in').on('click', function(){
          $('#astroid').addClass('zoom-in');
          $('.galaxy').removeClass('active')
      })

    }else if(counter === 2){
      console.log(counter)
      $('#zoom-out').on('click', function(){
        $('.galaxy').removeClass('active');
        $('.outer-space').addClass('active');
      });
    }
    console.log(counter)
});
});
