$(function() {
  const toTopButton = $("#toTop");
  const products = $('a[href="#products"]');
  const aboutUs = $('a[href="#aboutUs"]');
  const contactUs = $('a[href="#contactUs"]');
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

  products.click(function() {
    const productsId = $("#products");
    page.animate({
      scrollTop: productsId.offset().top
    }, scrollSpeed);
  });
  aboutUs.on( "click", function() {
    const aboutUsId = $("#aboutUs");
    page.animate({
      scrollTop: aboutUsId.offset().top - aboutUsId.height() / 2
    }, scrollSpeed);
  });
  contactUs.on( "click", function() {
    const contactUsId = $("#contactUs");
    page.animate({
      scrollTop: $("#contactUs").offset().top
    }, scrollSpeed);
  });
});
