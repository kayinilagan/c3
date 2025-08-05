
function showDialog(selector) {
    const dialog = document.querySelector(selector);
    dialog.showModal();
    return dialog;
}

function setName() {
    const dialog = showDialog('#name-dialog');
    const nameSubmitButton = document.getElementById('name-submit');
    nameSubmitButton.addEventListener('click', () => {
        const nameInput = document.getElementById('name');
        const nameContent = document.getElementById('name-content');
        nameContent.innerHTML = nameInput.value;
        dialog.close();
    });
    const cancelButton = document.getElementById('name-cancel-button');
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });
}

function setBackground() {
    showDialog('#background-dialog');
}

function setInventory() {
    showDialog('#inventory-dialog');
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


