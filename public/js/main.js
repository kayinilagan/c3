let inventory = ["", "", "", "", "", "", "", "", "", ""];
let petty = ["", "", "", "", "", "", "", "", "", ""];

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

function setMultiAttribute(dialog) {
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
            console.log("Slot " + (index+1) + " changed to " + input.value);
            inventory[index] = input.value;
            console.log(inventory);
        });
    })
}

function updateInventory() {
    console.log(inventory);
    document.getElementById('main-grid__inventory').querySelector('.div-content').innerHTML = inventory.join(' ');
}
function setName() {
    setSingleAttribute(showDialog('#name-dialog'), 'name-submit', 'name', 'name-content', 'name-cancel');
}

function setBackground() {
    setSingleAttribute(showDialog('#background-dialog'), 'background-submit', 'background', 'background-content', 'background-cancel');
}

function setInventory() {
    setMultiAttribute(showDialog('#inventory-dialog'));
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


