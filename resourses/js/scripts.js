
$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });
    /* Scroll on buttons */
    $('.js--scroll-to-planes').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-planes').offset().top}, 1000); 
    });
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    /* Navigation scroll */
     $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    /* animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
/* Mobile navigation*/
    
    $('.js--nav-icon').click(function(){
       var nav = $('.js--main-nav'); 
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200)
        if (icon.hasClass('ion-navicon')){
           icon.addClass('ion-close');
            icon.removeClass('ion-navicon');
        }else{
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        }
    });
    
    /*Maps*/
    
  var map =  new GMaps({
  div: '.map',
  lat: 38.74385,
  lng: -9.1,
zoom: 12
});
map.addMarker({
  lat: 38.7436057,
  lng: -9.15,
  title: 'Lisbon',
  infoWindow: {
  content: '<p>Our Lisbon HQ</p>'
}
});
    
});
