$(document).ready(function() {

  $('html').click(function() {
   $('#megaMenu').fadeOut( "fast",function() {
   });
   $('#megaCarot').removeClass("carot-rotated");
   $('#nav-game-button').removeClass("menu-selected");
  });

  $('#megaWrap').click(function(event){
       event.stopPropagation();
  });

  $( "#megaMenuTrig" ).click(function() {
  $( "#megaMenu" ).fadeToggle( "fast", function() {
    });
  $('#megaCarot').toggleClass("carot-rotated");
  $('#nav-game-button').toggleClass("menu-selected");
  });

});
