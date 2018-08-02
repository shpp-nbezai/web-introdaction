const NAMES_ARRAY = [
  {
    name: "Stemid",
    image: "styles/images/0.jpg"
  },
  {
    name: "Hector",
    image: "styles/images/1.jpg"
  },
  {
    name: "Ingvar",
    image: "styles/images/2.jpg"
  },
  {
    name: "Sigurd",
    image: "styles/images/3.jpg"
  },
  {
    name: "Duncan",
    image: "styles/images/4.jpg"
  },
  {
    name: "Asmund",
    image: "styles/images/5.jpg"
  },
  {
    name: "Achilles",
    image: "styles/images/6.jpg"
  }
];

$(function() {
  const animationSpeed = 10;
  const flip = $("#flip");
  const panel = $("#panel");
  let userImageIndex = 0;
  createDropdownList();

  flip.on("click", function() {
    panel.slideToggle(animationSpeed, function() {
        $(this).stop(true, false);
    });
  });

  $(".dropdown-button").click(function() {
    panel.slideUp(animationSpeed);
    const userName = $(this).text();
    const userImageScr = $(this).find("img").attr("src");
    $(".active-user").text(userName).prepend(
      `<img
        class = "button-ico"
        src="${ userImageScr }"
        alt="${ userName }">`
    );
  });

  $(document).on("click", function(event) {
    if (!flip.is(event.target)) {
      panel.slideUp(animationSpeed);
    }
  });

  function createDropdownList() {
    const userList = NAMES_ARRAY.reduce((list, item) =>
    ( list + `<li class = "dropdown-button">
                <img
                  class = "button-ico"
                  src="${ item.image }"
                  alt="${ item.name }">
                ${ item.name }
              </li>`
    ), "");
    panel.append(userList);
  }
});
