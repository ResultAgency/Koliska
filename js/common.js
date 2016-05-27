  
    //// GOOGLE MAPS API
////-----------------------------------------------------------
google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 13,
    scrollwheel: false,
    center: new google.maps.LatLng(50.455812, 30.374746) // Keiv
}


    $('#gmap').css('min-height',$(window).height() - $('nav#menu') - $('.contact-meta');

  if ($('#gmap').length > 0) {
    var mapElement = document.getElementById('gmap');
    var map = new google.maps.Map(mapElement, mapOptions);


      var contentString = '<div id="content">м.Житомирська, Святошино Проспект Победы 107 кв 65</div>';
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(50.455812, 30.374746),
          map: map,
          title: 'Flexis'
      });
      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
      });

  
  



