$(document).ready(function(){
    createDropdowndButton();
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});



const NAMES_ARRAY = [
  "Nikolay",
  "Anatiliy",
  "Degorych",
  "Den",
  "Alexey"
];


function createDropdowndButton() {
  const RESULT_DIV =  document.getElementById( 'panel' );
  NAMES_ARRAY.map(item => {
    console.log(item);
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute( 'class', 'dropdown-button' ); 
    let name = document.createTextNode(item);
    button.appendChild(name);
    div.appendChild(button);
    RESULT_DIV.appendChild(div);
    });

}
