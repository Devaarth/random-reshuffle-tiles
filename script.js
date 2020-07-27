
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9;

document.addEventListener("DOMContentLoaded", function (event) {
    tile1 = document.getElementById('number1')
    tile2 = document.getElementById('number2')
    tile3 = document.getElementById('number3')
    tile4 = document.getElementById('number4')
    tile5 = document.getElementById('number5')
    tile6 = document.getElementById('number6')
    tile7 = document.getElementById('number7');
    tile8 = document.getElementById('number8')
    tile9 = document.getElementById('number9')

});
function onShuffle() {
    //Shuffling color based on randomy generated array
    var shuffledTileNo = randomArrayGenerator(arr);
    document.getElementById('container' + shuffledTileNo[0]).style.backgroundColor = '#6F98A8';
    document.getElementById('container' + shuffledTileNo[1]).style.backgroundColor = '#6F98A8';
    document.getElementById('container' + shuffledTileNo[2]).style.backgroundColor = '#2B8EAD';
    document.getElementById('container' + shuffledTileNo[3]).style.backgroundColor = '#2B8EAD';
    document.getElementById('container' + shuffledTileNo[4]).style.backgroundColor = '#2F454E';
    document.getElementById('container' + shuffledTileNo[5]).style.backgroundColor = '#2F454E';
    document.getElementById('container' + shuffledTileNo[6]).style.backgroundColor = '#2F454E';
    document.getElementById('container' + shuffledTileNo[7]).style.backgroundColor = '#BFBFBF';
    document.getElementById('container' + shuffledTileNo[8]).style.backgroundColor = '#BFBFBF'

    // setting tiles value as per randomly generated array
    tile1.innerHTML = shuffledTileNo[0];
    tile2.innerHTML = shuffledTileNo[1];
    tile3.innerHTML = shuffledTileNo[2];
    tile4.innerHTML = shuffledTileNo[3];
    tile5.innerHTML = shuffledTileNo[4];
    tile6.innerHTML = shuffledTileNo[5];
    tile7.innerHTML = shuffledTileNo[6];
    tile8.innerHTML = shuffledTileNo[7];
    tile9.innerHTML = shuffledTileNo[8];
}

function onSort() {
    var intialTileArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    tile1.innerHTML = intialTileArray[0];
    tile2.innerHTML = intialTileArray[1];
    tile3.innerHTML = intialTileArray[2];
    tile4.innerHTML = intialTileArray[3];
    tile5.innerHTML = intialTileArray[4];
    tile6.innerHTML = intialTileArray[5];
    tile7.innerHTML = intialTileArray[6];
    tile8.innerHTML = intialTileArray[7];
    tile9.innerHTML = intialTileArray[8];
}
// Jumbles array
function randomArrayGenerator(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}