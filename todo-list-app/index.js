window.onload = function() {
    const addItemButton = document.getElementById("add-item-button");
    const addItemInput = document.getElementById("add-item-input");
    const listHead = document.getElementById("list");

    const finishTask = (e) => {
        if (e.target.checked) {
            e.target.setAttribute('class', 'strike');
        } else {
            e.target.removeAttribute('class');
        }
    }

    const addItem = (e) => {
        let inputValue = addItemInput.value;

        if (!inputValue) {
            return;
        }

        itemTemplate = document.getElementById("item-template");
        const clone = document.importNode(itemTemplate.content, true);
        clone.querySelector('span').textContent = inputValue;
        clone.querySelector('input').addEventListener('click', finishTask);
        listHead.appendChild(clone);

        addItemInput.value = ''
    }

    addItemButton.addEventListener('click', addItem);
};