
// Toggle the Favorite on Listing 
$( ".listing__favorite" ).click(function() {
  $( this ).toggleClass( "listing__favorite--favorited" );
});

// Slick Slider for Listings
$('.js-listing-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:"<button type='button' class='slick__arrow slick-prev transition bg-white border-0 shadow text-center py-1 px-3 rounded'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick__arrow slick-next transition bg-white border-0 shadow text-center py-1 px-3 rounded'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Refresh Slick on Tab Clicks
$('.nav-link--pill').click(function() {
  $('.js-listing-slider').slick('refresh');
});