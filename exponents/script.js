function calculate(){
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    let c = a ** b;
    const td = document.getElementById('results');
    document.getElementById('result').innerHTML = c;
    td.setAttribute('id', 'visible');
}