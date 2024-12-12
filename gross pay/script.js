function grossPay(){
    const hours_worked = parseFloat(document.getElementById('hours').value);
    const hourly_wages = parseFloat(document.getElementById('money').value);
    const regularPay = (hours_worked * hourly_wages);
    const ssa = (regularPay * 0.062);
    const medicare = (regularPay * 0.0145);
    const fica = (ssa + medicare);
    const actualRegularPay = (regularPay - fica);
    const PayWithOvertime = (hourly_wages * 40) + (hourly_wages * 1.5 * (hours_worked - 40) - fica);

    const body = document.getElementById('body');

    const table = document.createElement('table');
    table.setAttribute('id', 'tr')
    const tables = document.createElement('table');

    body.appendChild(table);
    body.appendChild(tables);

    const trOne = document.createElement('tr');
    const trTwo = document.createElement('tr');
    const trThree = document.createElement('tr');

    table.appendChild(trOne);
    table.appendChild(trTwo);
    tables.appendChild(trThree);

    const tdOne = document.createElement('td');

    const pA = document.createElement('p');
    tdOne.appendChild(pA);
    const aP = document.createTextNode('xxx-xx-xxxx');
    pA.appendChild(aP);

    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');

    trOne.appendChild(tdOne);
    trOne.appendChild(tdTwo);
    trOne.appendChild(tdThree);

    trOne.setAttribute('id','tr');
    tdOne.setAttribute('id','tdd');
    tdTwo.setAttribute('id','td');
    let date = new Date();
    let dateWithoutTime = date.toDateString();
    let dates = dateWithoutTime;
    document.getElementById('td').innerHTML = dates;
    tdThree.setAttribute('id','b');

    const tdFour = document.createElement('td');
    trTwo.appendChild(tdFour);

    const h3One = document.createElement('h3');
    tdFour.appendChild(h3One);
    h3One.setAttribute('style', 'text-align: center;');
    const oneH3 = document.createTextNode('Personal Info');
    h3One.appendChild(oneH3);

    const pOne = document.createElement('p');
    tdFour.appendChild(pOne);
    const wordsOne = document.createTextNode('Name');
    pOne.appendChild(wordsOne);

    const pTwo = document.createElement('p');
    tdFour.appendChild(pTwo);
    const wordsTwo = document.createTextNode('Address');
    pTwo.appendChild(wordsTwo);

    const pThree = document.createElement('p');
    tdFour.appendChild(pThree);
    const wordsThree = document.createTextNode('City ');
    pThree.appendChild(wordsThree);
    const wordsThreee = document.createTextNode('State ');
    pThree.appendChild(wordsThreee);
    const wordsThreeee = document.createTextNode('Zip');
    pThree.appendChild(wordsThreeee);

    const tdFive = document.createElement('td');
    trTwo.appendChild(tdFive);

    const h3Two = document.createElement('h3');
    tdFive.appendChild(h3Two);
    h3Two.setAttribute('style', 'text-align: center;');
    const twoH3 = document.createTextNode('Company Info');
    h3Two.appendChild(twoH3);

    const pFour = document.createElement('p');
    const wordsFour = document.createTextNode('Name');
    pFour.appendChild(wordsFour);

    const pFive = document.createElement('p');
    const wordsFive = document.createTextNode('Address');
    pFive.appendChild(wordsFive);
    
    const pSix = document.createElement('p');
    const wordsSix = document.createTextNode('City ');
    pSix.appendChild(wordsSix);
    const wordsSixx = document.createTextNode('State ');
    pSix.appendChild(wordsSixx);
    const wordsSixxx = document.createTextNode('Zip');
    pSix.appendChild(wordsSixxx);

    tdFive.appendChild(pFour);
    tdFive.appendChild(pFive);
    tdFive.appendChild(pSix);

    const tdSix = document.createElement('td');
    tdFive.setAttribute('id', 'c')
    tdSix.setAttribute('id','b');

    trTwo.appendChild(tdSix);

    const tdSeven = document.createElement('td');
    trThree.appendChild(tdSeven);
    const h4One = document.createElement('h4');
    tdSeven.appendChild(h4One);
    const oneH4 = document.createTextNode('Hours');
    h4One.appendChild(oneH4);

    const tdEight = document.createElement('td');
    trThree.appendChild(tdEight);
    const h4Two = document.createElement('h4');
    tdEight.appendChild(h4Two);
    const twoH4 = document.createTextNode('Pay Rate');
    h4Two.appendChild(twoH4);

    const tdNine = document.createElement('td');
    trThree.appendChild(tdNine);
    const h4Three = document.createElement('h4');
    tdNine.appendChild(h4Three);
    const threeH4 = document.createTextNode('Gross Pay');
    h4Three.appendChild(threeH4);

    const trFour = document.createElement('tr');
    tables.appendChild(trFour);

    const tdTen = document.createElement('td');
    trFour.appendChild(tdTen);
    const pSeven = document.createElement('p');
    tdTen.appendChild(pSeven);
    pSeven.setAttribute('style','text-align: center; font-size: 20px;')
    const sevenP = document.createTextNode(hours_worked + ' hour(s)');
    pSeven.appendChild(sevenP)
    const brOne = document.createElement('br');
    tdTen.appendChild(brOne);
    const brTwo = document.createElement('br');
    tdTen.appendChild(brTwo);
    const brThree = document.createElement('br');
    tdTen.appendChild(brThree);
    const brFour = document.createElement('br');
    tdTen.appendChild(brFour);
    const brFive = document.createElement('br');
    tdTen.appendChild(brFive);

    const tdEleven = document.createElement('td');
    trFour.appendChild(tdEleven);
    const pEight = document.createElement('p');
    tdEleven.appendChild(pEight);
    const eightP = document.createTextNode('$' + hourly_wages.toFixed(2));
    pEight.appendChild(eightP);
    pEight.setAttribute('style', 'text-align: center; font-size: 20px;');
    const pNine = document.createElement('p');
    tdEleven.appendChild(pNine);
    const nineP = document.createTextNode('SSA');
    pNine.appendChild(nineP);
    pNine.setAttribute('style', 'text-align: center; font-size: 20px;');
    const pTen = document.createElement('p');
    tdEleven.appendChild(pTen);
    const tenP = document.createTextNode('Medicare');
    pTen.appendChild(tenP);
    pTen.setAttribute('style', 'text-align: center; font-size: 20px;');

    const tdTwelve = document.createElement('td');
    trFour.appendChild(tdTwelve);
    const pEleven = document.createElement('p');
    tdTwelve.appendChild(pEleven);
    const elevenP = document.createTextNode('$' + regularPay.toFixed(2));
    pEleven.appendChild(elevenP);
    pEleven.setAttribute('style', 'text-align: center; font-size: 20px;');
    const pTwelve = document.createElement('p');
    tdTwelve.appendChild(pTwelve);
    pTwelve.setAttribute('style', 'text-align: center; font-size: 20px;');
    const twelveP = document.createTextNode('$' + ssa.toFixed(2));
    pTwelve.appendChild(twelveP);
    const pThirteen = document.createElement('p');
    tdTwelve.appendChild(pThirteen);
    pThirteen.setAttribute('style', 'text-align: center; font-size: 20px;');
    const thirteenP = document.createTextNode('$' + medicare.toFixed(2));
    pThirteen.appendChild(thirteenP);

    const trFive = document.createElement('tr');
    tables.appendChild(trFive);

    const tdThirteen = document.createElement('td');
    trFive.appendChild(tdThirteen);

    const tdFourteen = document.createElement('td');
    trFive.appendChild(tdFourteen);
    const pFourteen = document.createElement('p');
    tdFourteen.appendChild(pFourteen);
    const fourteenP = document.createTextNode('NetPay');
    pFourteen.appendChild(fourteenP);
    pFourteen.setAttribute('style', 'text-align: center; font-size: 20px;');

    const tdFifteen = document.createElement('td');
    trFive.appendChild(tdFifteen);
    const pFifteen = document.createElement('p');
    tdFifteen.appendChild(pFifteen);
    pFifteen.setAttribute('style', 'text-align: center; font-size: 20px;');
    if (hours_worked <= 40){
        const fifteenP = document.createTextNode("$" + actualRegularPay.toFixed(2));
        pFifteen.appendChild(fifteenP);
    }
    else {
        const fifteenP = document.createTextNode("$" + PayWithOvertime.toFixed(2));
        pFifteen.appendChild(fifteenP);
    }

    if (document.getElementById('visible'))
      {document.getElementById('visible').id = "invisible";}
    if (document.getElementById('visibles'))
      {document.getElementById('visibles').id = "invisibles";}
    if (document.getElementById('visibless'))
      {document.getElementById('visibless').id = "invisibless";}
}