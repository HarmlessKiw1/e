let editingRow; 

function phone() {
    const tb = document.getElementById('a');

    const trr = document.createElement('tr');
    tb.appendChild(trr);

    const tdd = document.createElement('td');
    trr.appendChild(tdd);
    tdd.setAttribute('id', 'results');

    const tddd = document.createElement('td');
    trr.appendChild(tddd);
    tddd.setAttribute('id', 'result');

    const tdddd = document.createElement('td');
    trr.appendChild(tdddd);
    tdddd.setAttribute('id', 'resul');
    const z = ['first', 'last', 'number'];
    const f = [];
for (let i = 0; i < z.length; i++) {
  f.push(document.getElementById(z[i]).value)
}

  const tn = document.createTextNode(f[0]);
const tnn = document.createTextNode(f[1]);
const tnnn = document.createTextNode(f[2]);

  tdd.appendChild(tn);
  tddd.appendChild(tnn);
    tdddd.appendChild(tnnn);
  

    // edit button
   const button = document.createElement('button');
    trr.appendChild(button);
    let edit = document.createTextNode("edit");
    button.setAttribute('id', 'edit');
    button.setAttribute('onclick', 'edit(this)');
    button.appendChild(edit);

    // delete button
   const buttonss = document.createElement('button');
    trr.appendChild(buttonss);
    let deletes = document.createTextNode("delete?");
    buttonss.setAttribute('id', 'delete');
    buttonss.setAttribute('onclick', 'deletes(this)');
    buttonss.appendChild(deletes);
}

//makes sure you want to edit
function edit(button) {
    const tr = button.parentNode;

    editingRow = tr;

    let w = tr.cells[0].textContent;
    let x = tr.cells[1].textContent;
    let y = tr.cells[2].textContent;

    document.getElementById('first').value = w;
    document.getElementById('last').value = x;
    document.getElementById('number').value = y;

//makes cancel button visible
  if (document.getElementById('cancel'))
      {document.getElementById('cancel').id = "visibless";}

//makes add button invisible
  if (document.getElementById('addd'))
      {document.getElementById('addd').id = "add";}

//makes update button visible
  if (document.getElementById('updateButton'))
      {document.getElementById('updateButton').id = "visible";}

//makes delete button invisible
  if (document.getElementById('visibles'))
      {document.getElementById('visibles').id = "deleteButton";}
}


//makes sure you want to delete
function deletes(but) {
  
  const tr = but.parentNode;

    editingRow = tr;
    let w = tr.cells[0].textContent;
    let x = tr.cells[1].textContent;
    let y = tr.cells[2].textContent;

    document.getElementById('first').value = w;
    document.getElementById('last').value = x;
    document.getElementById('number').value = y;

//makes add button invisible
  if (document.getElementById('addd'))
      {document.getElementById('addd').id = "add";}


//makes delete button visible
  if (document.getElementById('deleteButton'))
      {document.getElementById('deleteButton').id = "visibles";}

//makes cancel button visible
  if (document.getElementById('cancel'))
      {document.getElementById('cancel').id = "visibless";}

//makes update button invisible
  if (document.getElementById('visible'))
      {document.getElementById('visible').id = "updateButton";}
}

//updates row
function updateRow() {
    if (editingRow) {
        let w = document.getElementById('first').value;
        let x = document.getElementById('last').value;
        let y = document.getElementById('number').value;

        editingRow.cells[0].textContent = w;
        editingRow.cells[1].textContent = x;
        editingRow.cells[2].textContent = y;

        document.getElementById('first').value = '';
        document.getElementById('last').value = '';
        document.getElementById('number').value = '';

        editingRow = null;
    }

//makes cancel button invisible
  if (document.getElementById('visibless'))
      {document.getElementById('visibless').id = "cancel";}

//makes add button visible
  if (document.getElementById('add'))
      {document.getElementById('add').id = "addd";}

//makes update button invisible
  if (document.getElementById('visible'))
      {document.getElementById('visible').id = "updateButton";}
}

// deletes row
function deletess() {
    if (editingRow) {
        editingRow.remove();

        document.getElementById('first').value = '';
        document.getElementById('last').value = '';
        document.getElementById('number').value = '';
        editingRow = null;

    }
//makes add button visible
  if (document.getElementById('add'))
      {document.getElementById('add').id = "addd";}

//makes cancel button invisible
  if (document.getElementById('visibless'))
      {document.getElementById('visibless').id = "cancel";}

//makes delete button invisible
  if (document.getElementById('visibles'))
      {document.getElementById('visibles').id = "deleteButton";}
}

//cancel button function
function cancel() {

  //makes add button visible
  if (document.getElementById('add')) {
    document.getElementById('add').id = "addd";
  }
//makes cancel button invisible
  if (document.getElementById('visibless')) {
    document.getElementById('visibless').id = "cancel";
  }
//makes update button invisible
  if (document.getElementById('visible')) {
    document.getElementById('visible').id = "updateButton";
  }
//makes delete button invisible
  if (document.getElementById('visibles')) {
    document.getElementById('visibles').id = "deleteButton";
  }

  editingRow = null;
}


//no special characters or numbers or letters, depending on the input field
function noType(inputElement, regexPattern) {
  inputElement.addEventListener('input', Input);

  function Input() {
    let input = inputElement;
    input.value = input.value.replace(regexPattern, '');
  }
}

// for phone number, makes it so that no letters or special characters can be typed
let number = document.getElementById('number');
noType(number, /[^\d]/g);

// for first name, makes it so that no numbers or special characters can be typed
let first = document.getElementById('first');
noType(first, /[^a-zA-Z]/g);
// for last name, makes it so that no numbers or special characters can be typed
let last = document.getElementById('last');
noType(last, /[^a-zA-Z]/g);