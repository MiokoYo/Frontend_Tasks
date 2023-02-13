console.log('test');

let blocks = document.getElementsByClassName('block');
let textColors = document.querySelectorAll('span')

//random color 

function randomColor() {
    let hexString = "0123456789ABCDEF";
    let hexCode = "#";
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

//function of color assignment

function colorAssign(arr) {
    for (let i = 0; i < arr.length; i++) {
        let color = randomColor()
        arr[i].style.background = color;
        textColors[i].innerHTML = color;
    }
}

colorAssign(blocks)



