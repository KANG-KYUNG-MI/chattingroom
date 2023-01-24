const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addbtn = document.querySelector('.footer_button');

function onAdd() {
    const text = input.value;
    console.log(text);

    if (text === '') {
        input.focus();
        return;
    }

    const itemRow = createItem(text);
    items.appendChild(itemRow);


    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');


    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item_name');
    itemName.innerText = text;


    const itemDeleteBtn = document.createElement('button');
    itemDeleteBtn.setAttribute('class', 'item_delete');
    itemDeleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';


    itemDeleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item_divider');

    item.appendChild(itemName);
    item.appendChild(itemDeleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}


addbtn.addEventListener('click', () => {
    onAdd();
}
);

input.addEventListener('keypress', (event) => {
    console.log('key');
});