document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    setupThemeToggle();

    // Lade alle Todos
    fetchTodos();

    // Event-Listener für das Formular
    document.getElementById('todo-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo();
    });
});

// Theme Toggle Setup
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use OS preference
    const currentTheme = localStorage.getItem('theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', function() {
        let theme = 'light';

        if (!document.body.getAttribute('data-theme')) {
            document.body.setAttribute('data-theme', 'dark');
            theme = 'dark';
        } else {
            document.body.removeAttribute('data-theme');
        }

        localStorage.setItem('theme', theme);
    });
}

// Alle Todos laden
function fetchTodos() {
    fetch('/todo')
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            const emptyState = document.getElementById('empty-state');

            // Entferne alle vorhandenen Todo-Elemente (außer empty-state)
            const todoItems = todoList.querySelectorAll('.todo-item');
            todoItems.forEach(item => item.remove());

            if (todos.length === 0) {
                emptyState.style.display = 'block';
                return;
            }

            emptyState.style.display = 'none';

            todos.forEach(todo => {
                const todoItem = createTodoItem(todo);
                todoList.appendChild(todoItem);
            });
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
            const todoList = document.getElementById('todo-list');
            const emptyState = document.getElementById('empty-state');
            emptyState.textContent = 'Fehler beim Laden der Aufgaben.';
            emptyState.style.display = 'block';
        });
}

// Todo-Item-Element erstellen
function createTodoItem(todo) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    const customCheckbox = document.createElement('span');
    customCheckbox.className = 'custom-checkbox';

    const isCompleted = todo.completed !== undefined ? todo.completed : todo.done;


    if (isCompleted) {
        customCheckbox.classList.add('checked');
    }

    checkboxContainer.appendChild(customCheckbox);
    checkboxContainer.addEventListener('click', () => toggleTodo(todo.id, isCompleted));

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.title;
    if (isCompleted) {
        span.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.setAttribute('aria-label', 'Löschen');
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

    todoItem.appendChild(checkboxContainer);
    todoItem.appendChild(span);
    todoItem.appendChild(deleteBtn);

    return todoItem;
}

// Neues Todo hinzufügen
function addTodo() {
    const input = document.getElementById('new-todo');
    const title = input.value.trim();

    if (!title) return;

    fetch('/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    })
        .then(response => response.json())
        .then(() => {
            input.value = '';
            fetchTodos();
        })
        .catch(error => console.error('Error adding todo:', error));
}

// Todo-Status umschalten
function toggleTodo(id, isCompleted) {
    fetch(`/todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            completed: !isCompleted
        })
    })
        .then(() => fetchTodos())
        .catch(error => console.error('Error toggling todo:', error));
}

// Todo löschen
function deleteTodo(id) {
    fetch(`/todo/${id}`, {
        method: 'DELETE'
    })
        .then(() => fetchTodos())
        .catch(error => console.error('Error deleting todo:', error));
}