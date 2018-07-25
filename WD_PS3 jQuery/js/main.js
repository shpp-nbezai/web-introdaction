$(document).ready(function(){
  createDropdownd();
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
  $("#flip").blur(function(){
    $('#panel').slideUp('slow');
  });
  $(".dropdown-button").click(function(){
    $('#panel').slideUp('slow');
    const buttonText = $(this).text();
    const buttonImg = $(this).find("img").attr("src");
    console.log(buttonImg);
    $('#mainButton').text(buttonText);
    $("#mainIco").attr("src", buttonImg);
    $("#mainIco").show();
  });
});



const NAMES_ARRAY = [
  "Nikolay",
  "Anatiliy",
  "Degorych",
  "Den",
  "Kurt",
  "Mike",
  "Alexey"
];

const ICO_FILES_SRC = [
  "styles/images/android.png",
  "styles/images/arrows.png",
  "styles/images/cloud.png"
];

function createImage(fileScr, DOMsrc) {
  const image = document.createElement('img');
  image.setAttribute( "src" , fileScr );
  image.setAttribute( "class" , "button-ico" );
  DOMsrc.appendChild( image );
}

function changeFlipValue(value, imgSrc){
  //  let valueTextNode = document.createTextNode(value);
  document.getElementById("flip").firstChild.data = value;
  document.getElementById("mainIco").display = none;
}

function createDropdowndButton(name, imageSrc) {
  const RESULT_DIV =  document.getElementById( 'panel' );
  let button = document.createElement( "button" );
  let buttonImage = document.createElement( "img" );
  button.setAttribute( 'class', 'dropdown-button' );
  buttonImage.setAttribute( 'class', 'button-ico' );
  buttonImage.setAttribute( "src", imageSrc );
  button.appendChild( buttonImage );
  let nameTextNode = document.createTextNode(name);
  button.appendChild(nameTextNode);
  RESULT_DIV.appendChild(button);
}

function createDropdownd() {
  // const MAIN_BUTTON = document.getElementById( "flip");
  // createImage(ICO_FILES_SRC[2], MAIN_BUTTON );
  let j = 0;
  for (let i = 0; i < NAMES_ARRAY.length; i++) {
    j = Math.floor(Math.random() * ICO_FILES_SRC.length);
    createDropdowndButton( NAMES_ARRAY[i], ICO_FILES_SRC[j]);
    j++;
  }
}
