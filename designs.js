// Selecting color input
const color = $('#colorPicker');
const table = $('#pixelCanvas');
// Selecting size input
const height = $('#inputHeight');
const width = $('#inputWeight');

// When size is submitted by the user, calling makeGrid()

$('#buttonPaint').on('click', function makeGrid(event) {
    event.preventDefault(); 
    console.log('button works!');
    table.children().remove(); //clears grid
    let row = height.val(); 
    let cols = width.val(); 
    console.log(row, cols);

    //appending rows horizontally
    for(let x = 0; x <row; x++){
        table.append('<tr></tr>');
       
    }

    //appending rows vertically
    for(let y = 0; y<cols; y++){
        $('table tr').append('<td class = "box"></td>'); 
        
    }
});

//create paint on canvas 
table.on('click', '.box', function(){
    let background = color.val();
    if( $(this).css("background-color") === 
    'rgba(0, 0, 0, 0)' || $(this).css("background-color") === 'transparent'){
        $(this).css('background-color', background);
    }else{
       $(this).css('background-color', 'transparent');
    }
  });
  
  $("table").on("mousemove mouseenter mouseleave mouseover", "td", function(e) {
      if (e.which === 1) {
        let background = color.val();
        $(this).css("background-color", background);
      }
    });
  
  //making width/height form hide 
  $(document).ready(function(){
    $("#buttonPaint").click(function(){
        $("#sizePicker").hide();
    });
    $("#buttonPaint").click(function(){
        $("#sizePicker").show();
    });
});
  
//choose ideas 
var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "escapology"
words[2] = "brightwork"
words[3] = "verkrampte"
words[4] = "protectrix"
words[5] = "nudibranch"
words[6] = "grandchild"
words[7] = "newfangled"
words[8] = "flugelhorn"
words[9] = "mythologer"
words[10] = "pluperfect"
words[11] = "jellygraph"
words[12] = "quickthorn"
words[13] = "rottweiler"
words[14] = "technician"
words[15] = "cowpuncher"
words[16] = "middlebrow"
words[17] = "jackhammer"
words[18] = "triphthong"
words[19] = "wunderkind"
words[20] = "dazzlement"
words[21] = "jabberwock"
words[22] = "witchcraft"
words[23] = "pawnbroker"
words[24] = "thumbprint"
words[25] = "motorcycle"
words[26] = "cryptogram"
words[27] = "torchlight"
words[28] = "bankruptcy"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}