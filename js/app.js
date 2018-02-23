$(document).foundation();
$('.pp-nav').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top',function(){
  $(this).removeClass('shrink');
});

$('.pp-nav, .nav-icons, .s-link').on('sticky.zf.stuckto:top', function(){
    $('.nav-icons').addClass('hideIcons');
    $('.s-link').addClass('sticky-links');
}).on('sticky.zf.unstuckfrom:top',function(){
  $('.nav-icons').removeClass('hideIcons');
  $('.s-link').removeClass('sticky-links');
});
