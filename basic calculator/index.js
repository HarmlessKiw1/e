function add() {
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    let z = x + y
    document.getElementById('results').innerHTML = z;
}
function sub() {
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    let z = x - y
    document.getElementById('results').innerHTML = z;
}
function product() {
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    let z = x * y
    document.getElementById('results').innerHTML = z;
}
function quotient() {
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    let z = x / y
    document.getElementById('results').innerHTML = z;
}
function remainder() {
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    let z = x % y
    document.getElementById('results').innerHTML = z;
}