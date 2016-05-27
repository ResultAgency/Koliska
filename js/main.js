/**
 * Created by Администратор on 12.11.2015.
 */
$(document).ready(function() {
    $('#main').css('margin-top', $('header').height());

    var $menu = $("#menu");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500 && $menu.hasClass("default")) {
            $menu.fadeOut('fast', function() {
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function() {
                $(this).removeClass("fixed transbg")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    }); //scroll

    $menu.hover(
        function() {
            if ($(this).hasClass('fixed')) {
                $(this).removeClass('transbg');
            }
        },
        function() {
            if ($(this).hasClass('fixed')) {
                $(this).addClass('transbg');
            }
        }); //hover
});

$(document).ready(function($) {
    $("#owl-example").owlCarousel();
});

$(".scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - $('nav#menu').height()
    }, 1000);
});

google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        center: new google.maps.LatLng(50.455812, 30.374746) // Keiv
    };

    $(document.getElementById('gmap')).css('min-height', $(window).height() - $('nav#menu').height() - $('.contact-meta').height());

    if ($(document.getElementById('gmap')).length > 0) {
        var mapElement = document.getElementById('gmap');
        var map = new google.maps.Map(mapElement, mapOptions);


        var contentString = '<div id="content">м.Житомирська, Святошино Проспект Победы 107 оф 65</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.455812, 30.374746),
            map: map,
            title: 'Flexis'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
}
