$(function() {
  const toTopButton = $("#toTop");
  const modalPanel = $(".section-header_modal");
  const modalButton = $("#section-header_menu-modal-button");
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
      scrollTop: $(".section-header").offset().top
    }, scrollSpeed);
  });

  modalButton.on( "click", function() {
    // click(function(){
      console.log("toggle event ok");
      modalPanel.toggleClass("show-modal");
    });

});
