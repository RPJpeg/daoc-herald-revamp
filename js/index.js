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

  $( "#megaMenuTrig" ).click(function(e) {
    e.preventDefault();
  $( "#megaMenu" ).fadeToggle( "fast", function() {
    });
  $('#megaCarot').toggleClass("carot-rotated");
  $('#nav-game-button').toggleClass("menu-selected");

  });

  $( "#megaMenuTrig2" ).click(function(n) {
    n.preventDefault();
  $( "#megaMenu2" ).fadeToggle( "fast", function() {
    });
  });

  $( "#megaMobileMenuTrig" ).click(function() {
  $( "#megaMobileMenu" ).slideToggle( "fast", function() {
    });
  });

  $( "#searchMobileMenuTrig" ).click(function() {
  $( "#scrollMobileMenu" ).slideToggle( "fast", function() {
    });
  });

  $(function() {
      var show = $(".not-visible");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 500) {
              show.removeClass('not-visible').addClass("visible");
          } else {
              show.removeClass("visible").addClass('not-visible');
          }
      });
  });

  $("#back-to-top").click(function(){
          $('html, body').animate({ scrollTop: 0 }, 'slow');
  })

  $(function() {
      var show = $(".small-nav-hidden");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 200) {
              show.removeClass('small-nav-hidden').addClass("small-nav-shown");
          } else {
              show.removeClass("small-nav-shown").addClass('small-nav-hidden');
          }
      });
  });

  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll <= 200) {
      $('#megaMenu2').hide();
      }
    });
  })


  $("#back-to-top").click(function(){
          $('html, body').animate({ scrollTop: 0 }, 'slow');
  })


});
