document.addEventListener("DOMContentLoaded", function() {
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('task');
  
    submit.disabled = true;
  
    newTask.addEventListener('input', function() {
      submit.disabled = newTask.value === '';
    });
  
    document.querySelector('form').addEventListener('submit', function() {
      const taskText = newTask.value;
      const newListItem = document.createElement('li');
      newListItem.textContent = taskText;
      document.getElementById('tasks').appendChild(newListItem);
      newTask.value = '';
      submit.disabled = true;
      return false;
    });
  });
  