const cards = document.querySelectorAll('.card');
const dropZones = document.querySelectorAll('.drop-zone');

cards.forEach((card, index) => {
    card.id = 'card' + index;
    card.addEventListener('dragstart', dragStart);
});

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    const draggedCard = document.getElementById(cardId);
    event.target.appendChild(draggedCard);
}

function randomize() {
    const randoms = ['20/21', '22', '53', '80', '443', '990/989', '25', '143', '110', '23'];
    const randomss = randoms.sort(() => Math.random() - 0.5);
    randomss.forEach((randomsss, index) => {
        const element = document.getElementById(index.toString());
        if (element) element.textContent = randomsss;
    });
}

window.onload = randomize;

function submit() {
    const cells = document.querySelectorAll('#table td');
    const pairs = [["FTP", "20/21"], ["SSH", "22"], ["DNS", "53"], ["HTTP", "80"], ["HTTPS", "443"], ["FTPS", "990/989"], ["SMTP", "25"], ["IMAP", "143"], ["POP3", "110"], ["TELNET", "23"]];
    let correctCount = 0;
    pairs.forEach(pair => {
        for (let i = 0; i < cells.length - 1; i += 2) {
            const [h3One, h3Two] = [cells[i].querySelector('h3'), cells[i + 1].querySelector('h3')];
            if (h3One && h3Two) {
                const [value1, value2] = [h3One.textContent.trim(), h3Two.textContent.trim()];
                if (value1 === pair[0] && value2 === pair[1]) {
                    correctCount++;
                    break;
                }
            }
        }
    });
    let grade;
    if (correctCount >= 9) {
        grade = 'A';
    } else if (correctCount = 8) {
        grade = 'B';
    } else if (correctCount = 7) {
        grade = 'C';
    } else if (correctCount = 6) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    alert(correctCount + '/10 ' + grade);
    location.reload();
}

function sure() {
    const buttonss = document.getElementById('buttonss');
    const buttonTwo = document.createElement('button');
    buttonTwo.textContent = 'Confirm';
    buttonTwo.addEventListener('click', submit);
    buttonTwo.className = 'button';
    buttonss.appendChild(buttonTwo);
    document.getElementById('button').id = 'invisible';
}
