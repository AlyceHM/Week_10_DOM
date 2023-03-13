let id = 0

document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-address').value;
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('appointment-date').value;
    row.insertCell(3).innerHTML = document.getElementById('amount-due').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-address');

});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-info';
    btn.id = id;
    btn.innerHTML = 'Recieved';
    btn.onclick = () => {
        console.log(`Deleting row with ID: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);

    };
    return btn;

}