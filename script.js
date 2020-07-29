
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9;

document.addEventListener("DOMContentLoaded", function () {

    tile11 = {
        id: 1,
        color: '#6F98A8'
    }
    tile22 = {
        id: 2,
        color: '#2B8EAD'
    }
    tile33 = {
        id: 3,
        color: '#2F454E'
    }
    tile44 = {
        id: 4,
        color: '#2B8EAD'
    }
    tile55 = {
        id: 5,
        color: '#2F454E'
    }
    tile66 = {
        id: 6,
        color: '#BFBFBF'
    }
    tile77 = {
        id: 7,
        color: '#EFEFEF'
    }
    tile88 = {
        id: 8,
        color: '#6F98A8'
    }
    tile99 = {
        id: 9,
        color: '#2F454E'
    }
    tile1 = document.getElementById('number1')
    tile2 = document.getElementById('number2')
    tile3 = document.getElementById('number3')
    tile4 = document.getElementById('number4')
    tile5 = document.getElementById('number5')
    tile6 = document.getElementById('number6')
    tile7 = document.getElementById('number7')
    tile8 = document.getElementById('number8')
    tile9 = document.getElementById('number9')
    container1 = document.getElementById('container1')
    container2 = document.getElementById('container2')
    container3 = document.getElementById('container3')
    container4 = document.getElementById('container4')
    container5 = document.getElementById('container5')
    container6 = document.getElementById('container6')
    container7 = document.getElementById('container7')
    container8 = document.getElementById('container8')
    container9 = document.getElementById('container9')

});
function onShuffle() {

    var arr = [tile11, tile22, tile33, tile44, tile55, tile66, tile77, tile88, tile99];
    var shuffledTileNo = randomArrayGenerator(arr);
    //mapping bacground colour to respetive object
    container1.style.backgroundColor = shuffledTileNo[0].color;
    container2.style.backgroundColor = shuffledTileNo[1].color;
    container3.style.backgroundColor = shuffledTileNo[2].color;
    container4.style.backgroundColor = shuffledTileNo[3].color;
    container5.style.backgroundColor = shuffledTileNo[4].color;
    container6.style.backgroundColor = shuffledTileNo[5].color;
    container7.style.backgroundColor = shuffledTileNo[6].color;
    container8.style.backgroundColor = shuffledTileNo[7].color;
    container9.style.backgroundColor = shuffledTileNo[8].color;

    // setting tiles value as per randomly generated array
    tile1.innerHTML = shuffledTileNo[0].id;
    tile2.innerHTML = shuffledTileNo[1].id;
    tile3.innerHTML = shuffledTileNo[2].id;
    tile4.innerHTML = shuffledTileNo[3].id;
    tile5.innerHTML = shuffledTileNo[4].id;
    tile6.innerHTML = shuffledTileNo[5].id;
    tile7.innerHTML = shuffledTileNo[6].id;
    tile8.innerHTML = shuffledTileNo[7].id;
    tile9.innerHTML = shuffledTileNo[8].id;
}

function onSort() {
    var intialTileArray = [tile11, tile22, tile33, tile44, tile55, tile66, tile77, tile88, tile99];

    tile1.innerHTML = intialTileArray[0].id;
    tile2.innerHTML = intialTileArray[1].id;
    tile3.innerHTML = intialTileArray[2].id;
    tile4.innerHTML = intialTileArray[3].id;
    tile5.innerHTML = intialTileArray[4].id;
    tile6.innerHTML = intialTileArray[5].id;
    tile7.innerHTML = intialTileArray[6].id;
    tile8.innerHTML = intialTileArray[7].id;
    tile9.innerHTML = intialTileArray[8].id;

    container1.style.backgroundColor = intialTileArray[0].color;
    container2.style.backgroundColor = intialTileArray[1].color;
    container3.style.backgroundColor = intialTileArray[2].color;
    container4.style.backgroundColor = intialTileArray[3].color;
    container5.style.backgroundColor = intialTileArray[4].color;
    container6.style.backgroundColor = intialTileArray[5].color;
    container7.style.backgroundColor = intialTileArray[6].color;
    container8.style.backgroundColor = intialTileArray[7].color;
    container9.style.backgroundColor = intialTileArray[8].color;
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
