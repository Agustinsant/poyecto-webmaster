$('.gallery-carrousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.gallery-nav'
  });
  $('.gallery-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.gallery-carrousel',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  