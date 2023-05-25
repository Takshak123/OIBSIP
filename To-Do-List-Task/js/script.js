const todoForm = document.getElementById('todo-form');
        const todoInput = document.getElementById('todo-input');
        const todotextarea = document.getElementById('todo-textarea')
        const todoList = document.getElementById('todo-list');

        todoForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const todoText = todoInput.value;
            if (todoText.trim() !== '') {
                const todoItem = document.createElement('li');
                todoItem.innerHTML = `
      <span>${todoText}</span>
      <button>Delete</button>
    `;      
            
                todoList.appendChild(todoItem);
                todoInput.value = '';
            }
        });

        todoList.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON') {
                e.target.parentNode.remove();
            }
        });