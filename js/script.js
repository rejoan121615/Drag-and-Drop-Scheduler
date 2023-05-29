// photographer list slider
// $(document).ready(function () {
//   $("#photographer-list").slick()
// })

$(document).ready(function () {
    // slider dynamic width
    function sliderWidthHandler() {
        // set slider dynamic width
        $("#schedule-header .shadow").width(function (_, width) {
            $("#schedule-header #photographer-list").width(width);
        });
      
    }

  sliderWidthHandler();
  // set width on window resize 
  $(window).on('resize', function () {
    sliderWidthHandler();
  })
  
    // slider creator
    const sliderNextArrow = "#schedule-header .next-btn";
    const sliderPrevArrow = "#schedule-header .prev-btn";
    const photographerListSlider = $(
        "#schedule-header #photographer-list .slides-wrap"
    ).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        nextArrow: sliderNextArrow,
        prevArrow: sliderPrevArrow,
    });

    // check if a button need to diabale
    function SliderBtnHandler() {
        [sliderNextArrow, sliderPrevArrow].forEach((item, index) => {
            if ($(item).hasClass("slick-disabled")) {
                $(item).parent().css("opacity", 0).css("z-index", 0);
            } else {
                $(item).parent().css("opacity", 1).css("z-index", 50);
            }
        });
    }

    // check for the first time
    SliderBtnHandler();

    // check on every slider change
    photographerListSlider.on("afterChange", function (slick, currentState) {
        SliderBtnHandler();
    });


    // generate schedule board background grid 
    
});
