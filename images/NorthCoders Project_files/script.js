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
setupPlanet('galaxy', 160, 0.0253 );

$('#planet-info').click(function(){
  $('#wiki-nav-click1, #wiki-nav-click2').fadeToggle(500)

})


$(document).ready(function(){
  $('#zoom-out').click(function(){
    $('#astroid').addClass('zoom-out');
    $('.galaxy').addClass('active');
  });
})
