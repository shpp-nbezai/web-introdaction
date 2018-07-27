
const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';
let currentImageId = 0;
const previewClass = $( ".previewImage" );
const previewId = $( ".slider-previews" );
const IMAGES = [
  '?image=1080',
  '?image=1079',
  '?image=1069',
  '?image=1063',
  '?image=1050',
  '?image=1039'
];

$( function() {
  const imageList = IMAGES.reduce(( list, item ) =>
  ( list + `<li class = "previewImage"><img src="${ API_URL + SMALL_SIZE + item }" alt="0"></li>` ), "");
  $( ".slider-previews" ).append( imageList ).find( ">:first-child" ).addClass( "active" );

  $( "#previewImg" ).children( "li" ).each( function ( index ) {
    $( this ).children( "img" ).data( "arrImageId", index );
  });

  $( ".previewImage" ).click( function() {
    currentImageId = $( this ).children( "img" ).data( "arrImageId" );
    showSlide( currentImageId );
  });

  $( window ).keyup( function( e ) {
    let key = e.which | e.keyCode;
    if ( key === 37 ) { // 37 is left arrow
      showSlide( --currentImageId );
    }
    else if ( key === 39 ) { // 39 is right arrow
      showSlide( ++currentImageId );
    }
  });
});


function changeSlides( direction ) {
  showSlide( currentImageId += direction );
}

function checkIndex( index ) {
  if ( index < 0) {
    //( IMAGES.length - 1 ) minus 1 because the array index begins with 0 and the number of elements will overflow.
    currentImageId = index = IMAGES.length - 1;
  }
  //( IMAGES.length - 1 ) minus 1 because the array index begins with 0 and the number of elements will overflow.
  if ( index > (IMAGES.length -1)) {
    currentImageId = index = 0;
  }
  return index;
}

function setActiveImage( index ) {
  $( "#previewImg" ).children( "li" ).each( function () {
    $( this ).attr( "class", "previewImage" )
    let itemId = $( this ).children( "img" ).data( "arrImageId" );
    if ( itemId === index ) {
      $( this ).addClass( "active" );
    }
  });
}

function showSlide( index ) {
  index = checkIndex( index );
  const link = API_URL + BIG_SIZE + IMAGES[ index ];
  $( "#fullImg" ).attr( "src", link );
  setActiveImage( index );
}
