function calculate() {
 const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
const gradeOne = parseFloat(document.getElementById('gradeOne').value); 
    const gradeTwo = parseFloat(document.getElementById('gradeTwo').value); 
    const gradeThree = parseFloat(document.getElementById('gradeThree').value);
    let fullName = "Full Name: " + first + " " + last;

   let avg =  average(gradeOne,gradeTwo,gradeThree);
   let lgrade = letterGrade(avg);
   display(fullName, gradeOne, gradeTwo, gradeThree, avg, lgrade);
}

function average(gd1,gd2,gd3){
let avg = (gd1 + gd2 + gd3)/3;
return avg;
}

function letterGrade(avg){
let lettergrade;
     if (avg >= 90)
    {
       lettergrade = "A";
    }
    else if (avg >= 80 && avg < 90 )
    {
       lettergrade = "B";
    }
    else if (avg >= 70 && avg < 80)
    {
        lettergrade="C";
    }
    else if (avg >= 60 && avg < 70)
    {
      lettergrade="D";
    }
    else
    {
     lettergrade="F"   
    }
    return lettergrade;
}

function display(fullName, gd1, gd2, gd3, avg, lgrade){
    const field = document.getElementById('field');
    field.setAttribute('class', 'visible');
    document.getElementById('firstt').innerHTML = fullName;
    document.getElementById('res').innerHTML = "Grade One: " + gd1;
    document.getElementById('resu').innerHTML = "Grade Two: " + gd2;
    document.getElementById('resul').innerHTML = "Grade Three: " + gd3;
    document.getElementById('result').innerHTML = "Average: " + avg.toFixed(2);
    document.getElementById('results').innerHTML = "Letter Grade: " + lgrade;
}

//no special characters or numbers or letters, depending on the input field
function noType(inputElement, regexPattern) {
    inputElement.addEventListener('input', Input);

    function Input() {
        let input = inputElement;
        input.value = input.value.replace(regexPattern, '');
    }
}
document.addEventListener("DOMContentLoaded", function() {
// for first name, makes it so that no numbers or special characters can be typed
let first = document.getElementById('first');
noType(first, /[^a-zA-Z]/g);

// for last name, makes it so that no numbers or special characters can be typed
let last = document.getElementById('last');
noType(last, /[^a-zA-Z]/g);
});