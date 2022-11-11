console.log('test');
const colors = ['#0149cd', '#088ffd', '#2e0617', '#a80d14', '#3f1b98'];

let blocks = document.getElementsByClassName('block');
let textColors = document.querySelectorAll('div > span');

for (let i = 0; i < textColors.length; i++) {
    blocks[i].style.background = colors[i],
        textColors[i].innerHTML = colors[i]
}

colors.forEach(function (elem, i) {
    blocks[i].style.background = elem;
    textColors[i].innerHTML = elem;
});


//function of color assignment

function colorAssign(x, y) {
    colors.forEach(function (elem, i) {
        x[i].style.background = elem;
        y[i].innerHTML = elem;
    })
}

colorAssign(blocks, textColors);


//random color 

function randomColor() {
    let hexString = "0123456789ABCDEF";
    let hexCode = "#";
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.background = randomColor();
};

let blockArr = Array.from(blocks);
blockArr.forEach(function (elem) {
    elem.style.background = randomColor();
});

