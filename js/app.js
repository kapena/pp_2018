$(document).foundation();
// Loading Animation
$(function() {
  var overflow = $('body,html, .p-overlay');
  var $animation = $('.p-overlay').data('animation');
  var $animationpage = $('.page').data('animation');
  // Intro Page Animation
  MotionUI.animateIn($('.page'),$animationpage);
  // Using requestAnimationFrame in jQ to hold page for brief moment.
  // Creates jQ object where elem set to index [0]
  // is the plain object `{to:0}`
  // call .animate() chained to jQ object
  // Animates `{to:0}` property from 0 - 1
  // $({to:0}).animate({to:1}
  var duration = 1200;
  $({to:0}).animate({to:1}, duration, function(){
      MotionUI.animateOut($('.p-overlay'),$animation);
  });

$(".page").addClass('page-in-view').removeClass('page');
overflow.css('overflow','visible');
});

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
