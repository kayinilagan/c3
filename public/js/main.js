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
    inventory.forEach((item, index) => {
        document.getElementById(`inv-list-${index+1}`).innerHTML = item;
    })
}

function updatePetty(){
    petty.forEach((item, index) => {
        document.getElementById(`petty-list-${index+1}`).innerHTML = item;
    })
}

function setName() {
    setSingleAttribute(showDialog('#name-dialog'));
}

function setBackground() {
    setSingleAttribute(showDialog('#background-dialog'));
}

function setTraits(){
    setSingleAttribute(showDialog('#traits-dialog'));
}

function setInventory() {
    const dialog = showDialog('#inventory-dialog');
    const submitButton = dialog.querySelector('input[type="button"]');
    submitButton.addEventListener('click', () => {
        updateInventory();
        dialog.close();
    });
    const cancelButton = dialog.querySelector('button');
    const inventorySnapshot = inventory.slice();
    cancelButton.addEventListener('click', () => {
        inventory = inventorySnapshot.slice();
        updateInventory();
        dialog.close();
    });
    inventory.forEach((item, index) => {
        const input = dialog.querySelector(`input[id="inv-slot-${index+1}"]`);
        input.addEventListener('change', () => {
            if (input.value.length !== 0) {
                inventory[index] = input.value;
            }
        });
        const fatigueState = dialog.querySelector(`input[id="inv-check-${index+1}"]`);
        fatigueState.addEventListener('change', () => {
            if (fatigueState.checked) {
                inventory[index] = `<p class="invalid">${inventory[index]}</p>`;
                input.disabled = true;
                input.classList.add('invalid');
            } else {
                input.disabled = false;
                input.classList.remove('invalid');
            }
        })
    })
}

function setPetty() {
    const dialog = showDialog('#petty-dialog');
    const submitButton = dialog.querySelector('input[type="button"]');
    submitButton.addEventListener('click', () => {
        updatePetty();
        dialog.close();
    });
    const cancelButton = dialog.querySelector('button');
    const pettySnapshot = petty.slice();
    cancelButton.addEventListener('click', () => {
        petty = pettySnapshot.slice();
        updatePetty();
        dialog.close();
    });
    petty.forEach((item, index) => {
        const input = dialog.querySelector(`input[id="petty-slot-${index+1}"]`);
        input.addEventListener('change', () => {
            if (input.value.length !== 0){
                petty[index] = input.value;
            }
        })
    });
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


