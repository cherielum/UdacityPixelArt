// Selecting color input
const color = $('#colorPicker');
const table = $('#pixelCanvas');
// Selecting size input
const height = $('#inputHeight');
const width = $('#inputWIdth');

// When size is submitted by the user, calling makeGrid()

$('#buttonPaint').on('click', function makeGrid(event) {
    event.preventDefault(); 
    // console.log('button works!');
    table.children().remove(); //clears grid
    let row = height.val(); 
    let col = width.val(); 

    //appending rows horizontally
    for(let x = 0; x <row; x++){
        table.append('<tr></tr>');
    }

    //appending rows vertically
    for(let y = 0; y<col; y++){
        $('table tr').append('<td></td>'); 
    }
});

//create table