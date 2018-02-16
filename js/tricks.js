$('document').ready(function(){
  $('nav .navbar .navIcon').on('click',function(){
    $('.navPopup').toggleClass('topNavAnimation');
  })





  $('.me,.home').click(function () {
    $('html, body').animate({
     scrollTop : $('#' + $(this).data('value')).offset().top - 150}, 700);
   });



  $( window ).scroll(function() {
    if($(this).scrollTop() > window.innerHeight){
      $('.contactMe').addClass('contactafterheader');
    }
    else {
      $('.contactMe').removeClass('contactafterheader');
    }
   });


   $(window).scroll(function(){
       if($(this).scrollTop()>= 500)
         {$(".backToTop").slideDown();}
       else
         {$(".backToTop").slideUp();}
     })
   $(".backToTop").click(function(){
     $("html,body").animate({scrollTop:0},500);
   })



   $("body").niceScroll({
   cursorwidth:6,
   cursorcolor:'#0093f9',
   cursorborder:'none',
   cursorborderradius:4,
   autohidemode:'leave'
   });






   $('.contactMe').click(function(){
    $('.contactMePopup').slideDown();
    $('.overlaycontact').fadeIn();
    $('nav .navbar .navIcon').slideUp();
   })


   $('.contactMePopup i').click(function(){
      $('.contactMePopup').slideUp();
      $('.overlaycontact').fadeOut();
      $('nav .navbar .navIcon').slideDown();
   })

})


$(window).load(function(){
  $('.spinner').fadeOut();
})