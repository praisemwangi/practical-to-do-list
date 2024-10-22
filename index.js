document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    const addTodo = () => {
        const taskText = todoInput.value.trim();
        if (taskText === '') return; 

        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'editButton';
        listItem.appendChild(editButton);

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.className = 'removeButton';
        listItem.appendChild(removeButton);

        todoList.appendChild(listItem);
        todoInput.value = '';

        
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your task:', taskSpan.textContent);
            if (newText !== null && newText.trim() !== '') {
                taskSpan.textContent = newText.trim();
            } else {
                alert("Invalid input. Task text cannot be empty.");
            }
        });

        
        removeButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });
    };

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
