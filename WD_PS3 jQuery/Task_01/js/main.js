const NAMES_ARRAY = [
  "Jenny Hess",
  "Eliot Fu",
  "Stevie Feliciano",
  "Christian",
  "Matt",
  "Asmund",
  "Ahiless"
];
const ICO_FILES_SRC = [
  "styles/images/0.jpg",
  "styles/images/1.jpg",
  "styles/images/2.jpg",
  "styles/images/3.jpg",
  "styles/images/4.jpg",
  "styles/images/5.jpg",
  "styles/images/6.jpg",
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

  function getUserImage() {
    userImageIndex++;
    if (userImageIndex >= ICO_FILES_SRC.length) userImageIndex = 0;
    return  ICO_FILES_SRC[userImageIndex];
  }

  function createDropdownList() {
    const userList = NAMES_ARRAY.reduce((list, item) =>
    ( list + `<li class = "dropdown-button">
                <img
                  class = "button-ico"
                  src="${ getUserImage() }"
                  alt="${ item }">
                ${ item }
              </li>`
    ), "");
    panel.append(userList);
  }
});
