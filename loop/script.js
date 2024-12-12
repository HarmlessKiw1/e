function increment(){
    let number = parseInt(document.getElementById('number').value);
    let numberTwo = parseInt(document.getElementById('numberTwo').value);
    let numberThree = parseInt(document.getElementById('numberThree').value)
let text = ""
for (let i = number; i < numberTwo; i += numberThree) {
  text += [i] + "<br>";
}
document.getElementById('p').innerHTML = text;
}