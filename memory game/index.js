let clickedCard = null;
let preventClick = false;
combosFound = 0;

const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'pink',
    'cyan',
    'lime'
];

const cards = [...document.querySelectorAll('.card')]; 
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);
    
    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);
}

function onCardClicked(e) {
    const target = e.currentTarget;
    if (preventClick || target == clickedCard || target.className.includes('done')) {
        return;
    }
    if (target.className.includes('done')){
        return;
    }
    target.className = target.className
    .replace('color-hidden', '') .trim();
    target.className += ' done';

    if(!clickedCard){
    clickedCard = target;
    } else if (clickedCard) {
        if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
            preventClick = true;
            setTimeout(() => {
                console.log('we are here');
            clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
            target.className = target.className.replace('done', '').trim() + ' color-hidden';
            clickedCard = null;
            preventClick = false;
            }, 500);
        } else {
            combosFound++
            clickedCard = null;
            preventClick = false;
            if (combosFound === 8) {
                alert('YOU WIN')
            }
        }
    }
}