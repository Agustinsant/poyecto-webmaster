let dropDown = document.querySelector('.drop-down')
dropDown.addEventListener('click', function(){
  dropDown.classList.toggle('show')
})

let aDrop = document.querySelectorAll('.aDrop')
aDrop.addEventListener('click', function(){
  dropDown.classList.remove('show')
})

$(".gallery-carrousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".gallery-nav",
});
$(".gallery-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: ".gallery-carrousel",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows:false,
});

$(".gallery-responsive").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 597,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
