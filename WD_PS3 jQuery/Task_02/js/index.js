$(function() {
  const toTopButton = $("#toTop");
  const page = $("html, body");
  const scrollSpeed = 1000;

  page.bind("mousewheel", function(e){
    $(this).stop();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      toTopButton.stop(true, true).fadeIn();
    } else {
      toTopButton.stop(true, true).fadeOut();
    }
  });

  toTopButton.on( "click", function() {
    page.animate({
      scrollTop: $(".header").offset().top
    }, scrollSpeed);
  });

  $(".navigation-menu").on("click","a", function (event) {
    event.preventDefault();
    page.stop();
    const navigationId = $(this).attr('href');
    const elementHeigtht = $(navigationId).height();
    let scrollOffset = $(navigationId).offset().top;
    if ($(window).height() > elementHeigtht) {
      scrollOffset = $(navigationId).offset().top - elementHeigtht / 2;
    }
    page.animate( {
      scrollTop: scrollOffset
    }, scrollSpeed);
  });
});
