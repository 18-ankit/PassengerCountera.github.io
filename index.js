
var countEl = document.getElementById( "count-el" );

var saveEl = document.getElementById( "save-el" );

var count = 0;

function increment () {
    count = count + 1;

    countEl.innerText = count;  
}

function save () {
    var countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}