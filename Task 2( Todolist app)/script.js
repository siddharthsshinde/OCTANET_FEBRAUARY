document.getElementById('add-todo-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const value = input.value.trim();

    if (value) {
        const li = document.createElement('li');
        li.textContent = value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            list.removeChild(li);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = ''; // Clear the input
    }
});
