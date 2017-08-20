$(document).ready(function() {

  $('html').click(function() {
   $('#megaMenu').fadeOut( "fast",function() {
   });
   $('#megaMobileMenu').slideUp( "fast",function() {
   });
   $('#scrollMobileMenu').slideUp( "fast",function() {
   });
   $('#megaCarot').removeClass("carot-rotated");
   $('#nav-game-button').removeClass("menu-selected");
  });

  $('#megaWrap').click(function(event){
       event.stopPropagation();
  });
  $('#megaMobileWrap').click(function(event){
       event.stopPropagation();
  });

  $( "#megaMenuTrig" ).click(function() {
  $( "#megaMenu" ).fadeToggle( "fast", function() {
    });
  $('#megaCarot').toggleClass("carot-rotated");
  $('#nav-game-button').toggleClass("menu-selected");
  });

  $( "#megaMobileMenuTrig" ).click(function() {
  $( "#megaMobileMenu" ).slideToggle( "fast", function() {
    });
  });

  $( "#scrollMobileMenuTrig" ).click(function() {
  $( "#scrollMobileMenu" ).slideToggle( "fast", function() {
    });
  });


});
