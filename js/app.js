$(document).foundation();
$('.pp-nav').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top',function(){
  $(this).removeClass('shrink');
});
// Sticky nav additional feature
$('.pp-nav, .nav-icons, .s-link, .pplogo').on('sticky.zf.stuckto:top', function(){
    $('.pplogo').addClass('smaller');
    $('.nav-icons').addClass('hideIcons');
    $('.s-link').addClass('sticky-links');
}).on('sticky.zf.unstuckfrom:top',function(){
  $('.pplogo').removeClass('smaller');
  $('.nav-icons').removeClass('hideIcons');
  $('.s-link').removeClass('sticky-links');
});
// add fade out on close
$('.off-canvas a').on('click', function() {
    $('.off-canvas').foundation('close');
});
