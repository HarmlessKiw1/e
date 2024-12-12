function colorChange(){
let pizza = document.getElementById('pizza').value;
document.getElementById('one').style.color = pizza;

let video = document.getElementById('video').value;
document.getElementById('two').style.color = video;

let cooking = document.getElementById('cooking').value;
document.getElementById('three').style.color = cooking;

let baking = document.getElementById('baking').value;
document.getElementById('four').style.color = baking;

let iceCream = document.getElementById('iceCream').value;
document.getElementById('five').style.color = iceCream;
}
function seconds(){
    let input = parseFloat(document.getElementById('input').value);
    let inputs = parseFloat(document.getElementById('inputs').value);
    let inputss = parseFloat(document.getElementById('inputss').value);

    let seconds = (input * (60 * 60));
    let secondss = (inputs * 60);
    let inputssss = (input + 12);
    let secondsss = (inputssss * (60 * 60));

if (document.getElementById('select').value == 'am'){

    let realSeconds = (86400 - (seconds + secondss + inputss));
    document.getElementById('p').innerHTML = (realSeconds + ' Seconds until tomorrow');
}
else if (document.getElementById('select').value == 'pm'){
    let realSeconds = (86400 - (secondss + secondsss + inputss));
    document.getElementById('p').innerHTML = (realSeconds + ' Seconds until tomorrow');
}

}