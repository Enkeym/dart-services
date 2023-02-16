$(function () {

  // slick about
    $('.about__right').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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

    // accordion
    $(".services__menu").click(function() {
      if($(".services__bottom").hasClass("one")){
         $(".services__menu").not($(this)).removeClass("active");
         $(".services__blog").not($(this).next()).slideUp;
      }
      $(this).toggleClass("active");
    });

    // slick team
    $(".team__mid").slick({
      infinite: true,
	    centerMode: true,
      arrows: false,
	    centerPadding: '0%',
	    slidesToShow: 3,
	    speed: 500,
          responsive: [{
          
                breakpoint: 700,
                settings: {
                slidesToShow: 1
              }
            
          }]
    });

    // burger
    let intro = $(".intro");
    let nav = $(".nav");
    let header = $(".header");
    let burger = $("#burgerToggle")
    let burgerItem = $("#burgerItem")
    let introH = intro.height();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function () {
      introH = intro.height();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, introH);
    });

    // checkScroll
    function checkScroll(scrollPos, introH) {
      if ( scrollPos > introH ) {
        header.addClass("fixed")
      } else {
        header.removeClass("fixed")
      }
    }

    // Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        burgerItem.removeClass("active");
        header.removeClass("active");

        console.log(elementOffset);
        $("html, body").animate ({
          scrollTop: elementOffset - 63
        }, 600);
    });

    // burger Toggle
   burger.on("click", function(event) {
      event.preventDefault();

      header.toggleClass("active");
      burgerItem.toggleClass("active");
      nav.toggleClass("show");

    });
    

}); 