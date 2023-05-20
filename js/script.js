// photographer list slider
// $(document).ready(function () {
//   $("#photographer-list").slick()
// })


$(document).ready(function () {
  $("#photographer-list .slides-wrap").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '.next-slide-btn',
    prevArrow: '.prev-slide-btn'
  });
})