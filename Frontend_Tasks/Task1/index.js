console.log('test');
const colors = ['#0149cd', '#088ffd', '#2e0617', '#a80d14', '#3f1b98'];

//FIRST VARIANT

// document.getElementById('block1').innerHTML = "#0149cd";
// block1.style.background = colors[0];

// document.getElementById('block2').innerHTML = "#088ffd";
// block2.style.background = colors[1];

// document.getElementById('block3').innerHTML = "#2e0617";
// block3.style.background = colors[2];

// document.getElementById('block4').innerHTML = "#a80d14";
// block4.style.background = colors[3];

// document.getElementById('block5').innerHTML = "#3f1b98";
// block5.style.background = colors[4];

//SECOND VARIANT

// let blocks = document.getElementsByClassName('block');
// blocks[0].style.background = colors[0];
// blocks[1].style.background = colors[1];
// blocks[2].style.background = colors[2];
// blocks[3].style.background = colors[3];
// blocks[4].style.background = colors[4];

// blocks[0].innerHTML = "#0149cd";
// blocks[1].innerHTML = "#088ffd";
// blocks[2].innerHTML = "##2e0617";
// blocks[3].innerHTML = "#a80d14";
// blocks[4].innerHTML = "#3f1b98";

//THIRD VARIANT 

let blocks = document.getElementsByClassName('block');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.background = colors[i],
        blocks[i].innerHTML = colors[i]
}