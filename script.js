//$(".slideshow").load("content.html #slideshow");
//$(".captions").load("content.html #captions");


// Slick

$('.slideshow').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  responsive: [
  {
      breakpoint: 1560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1155,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

// Slick
$('.caption').hide();

$('.slideshow').on('beforeChange', function(){
  
  updateCaption();

});


function updateCaption(){

	$('.captionHolder').text(CaptionNow).hide();

    // Get current index of Active slide
	var SlideNow = $('.slides.slick-current.slick-active').attr('data-slick-index');
	
	var CaptionNow = $('.caption').eq(SlideNow).text();
	$('.captionHolder').text(CaptionNow).fadeIn('slow');


};










