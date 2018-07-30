const NAMES_ARRAY = [
  "Jenny Hess",
  "Eliot Fu",
  "Stevie Feliciano",
  "Christian",
  "Matt"
];
const ICO_FILES_SRC = [
  "styles/images/1.png",
  "styles/images/2.png",
  "styles/images/3.png",
  "styles/images/4.png",
  "styles/images/5.png"
];

$(function() {
  const animationSpeed = 600;
  const flip = $("#flip");
  const panel = $("#panel");
  let userImageIndex = 0;
  createDropdownList();

  flip.click(function() {
    panel.stop().slideToggle(animationSpeed);
  });

  $(".dropdown-button").click(function() {
    panel.slideUp(animationSpeed);
    const liText = $(this).text();
    const liImg = $(this).find("img").attr("src");
    $(".active-user").text(liText).prepend(
      `<img
        class = "button-ico"
        src="${ liImg }"
        alt="${ liText }">`
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
