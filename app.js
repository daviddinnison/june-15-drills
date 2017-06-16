//CAT CAROUSEL

$('.thumbnails img').click(function(event) {
    let thumbSrc = $('.thumbnail').attr('src');
    let largeSrc = $('.hero img').attr('src');
    $('.hero img').attr('src', $(this).attr('src').replace(thumbSrc, largeSrc));
  });



//LIGHTBULB
$('.js-lightbulb').click(function(event) {
  $('.js-lightbulb').removeClass('bulb-on');
  $(event.currentTarget).addClass('bulb-on');
});