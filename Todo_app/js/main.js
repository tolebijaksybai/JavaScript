const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const tasksList = document.querySelector('#list-group');


loadData();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value;

    const taskHTML = `<li class="list-group-item d-flex justify-content-between">
                        <span contenteditable="true" class="task-title">${taskText}</span>
                        <div>
                            <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
                            <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
                        </div>
                    </li>`;

    tasksList.insertAdjacentHTML('afterbegin', taskHTML);

    toggleEmptyListItem();

    input.value = '';

    input.focus();

    saveData();
})


tasksList.addEventListener('click', function (event) {
    console.log(event.target);

    if (event.target.getAttribute('data-action') == "delete-task") {

        event.target.closest('li.list-group-item').remove();
        toggleEmptyListItem();
        saveData();

    } else if (event.target.getAttribute('data-action') == "ready") {

        const parentElement = event.target.closest('li.list-group-item');

        parentElement.querySelector('span.task-title').classList.add('task-title--done');

        parentElement.querySelector('span.task-title').setAttribute('contenteditable', 'false');

        tasksList.insertAdjacentElement('beforeend', parentElement);

        parentElement.querySelector('button[data-action="ready"]').remove();
        
        saveData();

    }

})

function toggleEmptyListItem() {
    if (tasksList.children.length > 1) {
        document.querySelector('#empty-list-item').style.display = 'none';
    } else {
        document.querySelector('#empty-list-item').style.display = 'block';
    }
}

function saveData() {
    localStorage.setItem('todoList', tasksList.innerHTML);
}

function loadData() {
    if (localStorage.getItem('todoList')) {
        tasksList.innerHTML = localStorage.getItem('todoList');
    }
}