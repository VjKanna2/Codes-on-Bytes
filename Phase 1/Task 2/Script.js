const input = document.querySelector('.textBox')
const button = document.querySelector('.addBtn')
const list = document.querySelector('.list')

function addButton(e) {
    e.preventDefault()
    add()
}

// add items
function add() {
    const allItem = document.createElement('div')
    allItem.classList.add('allItem')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = input.value
    allItem.appendChild(item)

    if (input.value === '') return

    const doneButton = document.createElement("button")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    doneButton.classList.add("doneButton")
    allItem.appendChild(doneButton)

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteButton.classList.add("deleteButton")
    allItem.appendChild(deleteButton)

    list.appendChild(allItem)
    input.value = ''
}

// done and delete
function doneDelete(e) {
    const item = e.target

    if (item.classList[0] === 'doneButton') {
        const todoList = item.parentElement
        todoList.classList.toggle('checklist')
    }

    if (item.classList[0] === 'deleteButton') {
        const todoList = item.parentElement
        todoList.remove()
    }
}
button.addEventListener('click', addButton)
list.addEventListener('click', doneDelete)
