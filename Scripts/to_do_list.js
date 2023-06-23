const todoList = [];

function renderTodo() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObj = todoList[i];
        //const name = todoObj.name;
        //const dueDate = todoObj.dueDate;

        const { name, dueDate } = todoObj;

        const html = `     
        <div>${name}</div>  
        <div>${dueDate}</div> 
        <button onclick = "
            todoList.splice(${i}, 1);
            renderTodo();
        " class = "delete-button">Delete</button>
        `;

        todoListHtml += html;
    }

    document.querySelector('.show')
        .innerHTML = todoListHtml;
}


function addTodo() {
    const inputElement = document.querySelector(".js-todo");

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date');

    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    console.log(todoList);

    inputElement.value = '';

    renderTodo();
}