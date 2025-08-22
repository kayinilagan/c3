let inventory = ["", "", "", "", "", "", "", "", "", ""];
let petty = ["", "", "", "", "", "", "", "", "", ""];

function showDialog(selector) {
    const dialog = document.querySelector(selector);
    dialog.showModal();
    return dialog;
}

function setSingleAttribute(dialog){
    const submitButton = dialog.querySelector('input[type="button"]');
    submitButton.addEventListener('click', () => {
        const inputValue = dialog.querySelector('input[type="text"]').value;
        const content = document.querySelector(`#${getSubjectFromDialog(dialog.id)}-content`);
        content.innerHTML = inputValue;
        dialog.close();
    });
    const cancelButton = dialog.querySelector(`#${getSubjectFromDialog(dialog.id)}-cancel`);
    cancelButton.addEventListener('click', () => {
        dialog.close();
    })
}

function getSubjectFromDialog(id){
    return id.slice(0, -7);
}

function updateInventory() {
    document.getElementById('main-grid__inventory').querySelector('.div-content').innerHTML = inventory.join(' ');
}
function setName() {
    setSingleAttribute(showDialog('#name-dialog'), 'name-submit', 'name', 'name-content', 'name-cancel');
}

function setBackground() {
    setSingleAttribute(showDialog('#background-dialog'), 'background-submit', 'background', 'background-content', 'background-cancel');
}

function setInventory() {
    const dialog = showDialog('#inventory-dialog');
    const submitButton = dialog.querySelector('input[type="button"]');
    submitButton.addEventListener('click', () => {
        updateInventory();
        dialog.close();
    });
    const cancelButton = dialog.querySelector('button');
    cancelButton.addEventListener('click', () => {
        updateInventory();
        dialog.close();
    });
    inventory.forEach((item, index) => {
        const input = dialog.querySelector(`input[id="inv-slot-${index+1}"]`);
        input.addEventListener('change', () => {
            inventory[index] = input.value;
            console.log(inventory);
        });
    })
}

function setPetty() {
    showDialog('#petty-dialog');
}

function setStats() {
    showDialog('#stats-dialog');
}

function seeLogs() {
    showDialog('#log-dialog');
}

function setBonds() {
    showDialog('#bonds-dialog');
}

function setOmens() {
    showDialog('#omens-dialog');
}


