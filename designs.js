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

//create table
