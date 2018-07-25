$( function() {
  showPreviewImage();

  $( "#fullImg" ).click( function() {
    $( this ).addClass( 'previewImage' );
  });

  $( ".previewImage" ).click( function() {
    currentImageId = $( this ).attr( 'id' );
    showSlide( currentImageId );
  });

  $( window ).keyup( function( e ) {
    let key = e.which | e.keyCode;
    if ( key === 37 ){ // 37 is left arrow
      showSlide( --currentImageId );
    }
    else if ( key === 39 ){ // 39 is right arrow
      showSlide( ++currentImageId );
    }
  });
});

const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';
let currentImageId = 0;

const IMAGES = [
  '?image=1080',
  '?image=1079',
  '?image=1069',
  '?image=1063',
  '?image=1050',
  '?image=1039'
];

function showPreviewImage(){
  const previewImg = document.getElementById( "previewImg" );
  IMAGES.map( function( item, index ) {
    const liElement = document.createElement( "li" );
    liElement.setAttribute( 'class' , 'previewImage' );
    liElement.setAttribute( 'id' , index );
    const image = document.createElement( "img" );
    const link = API_URL + SMALL_SIZE + item;
    image.setAttribute( "src" , link );
    liElement.appendChild( image );
    previewImg.appendChild( liElement );
  });
  const activePreviewImg = document.getElementById( 0 );
  activePreviewImg.classList.add('active');
}

function changeSlides( direction ){
  showSlide( currentImageId += direction );
}

function showSlide( index ){
  if ( index < 0) {
    //( IMAGES.length - 1 ) minus 1 because the array index begins with 0 and the number of elements will overflow.
    currentImageId = index = IMAGES.length - 1;
  }
  //( IMAGES.length - 1 ) minus 1 because the array index begins with 0 and the number of elements will overflow.
  if ( index > (IMAGES.length -1)) {
  currentImageId = index = 0;
  }
  const link = API_URL + BIG_SIZE + IMAGES[ index ];
  const fullImage = document.getElementById( "fullImg" );
  fullImage.setAttribute( "src", link );

  const previewImages = document.getElementsByClassName( "previewImage" );
  for ( i = 0; i < previewImages.length; i++ ){
      previewImages[ i ].className = previewImages[ i ].className.replace( "active", "" );
  }

  const activePreviewImg = document.getElementById( index );
  activePreviewImg.classList.add( 'active' );
}
