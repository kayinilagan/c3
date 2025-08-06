
function showDialog(selector) {
    const dialog = document.querySelector(selector);
    dialog.showModal();
    return dialog;
}

function setSingleAttribute(dialog, submit, input, content, cancel) {
    const submitButton = document.getElementById(submit);
    submitButton.addEventListener('click', () => {
        const inputValue = document.getElementById(input).value;
        const contentValue = document.getElementById(content);
        contentValue.innerHTML = inputValue;
        dialog.close();
    });
    const cancelButton = document.getElementById(cancel);
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });
}

function setName() {
    setSingleAttribute(showDialog('#name-dialog'), 'name-submit', 'name', 'name-content', 'name-cancel');
}

function setBackground() {
    setSingleAttribute(showDialog('#background-dialog'), 'background-submit', 'background', 'background-content', 'background-cancel');
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


