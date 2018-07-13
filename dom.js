(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [];

  // submit button click
  var submit = document.getElementById('add');
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    var descriptionToDo = document.getElementById("description");
    var selectToDo = document.getElementById("select").value;
    var idToDo = todoFunctions.generateId();
    var markToDo = false;
    if (descriptionToDo.value.trim() === '') {
      alert('You must enter Description ! ');
    } else {
      var newItem = {
        id: idToDo,
        description: descriptionToDo.value,
        priority: selectToDo,
        mark: markToDo
      };
      var newState = todoFunctions.addTodo(state, newItem);
      update(newState);
      descriptionToDo.value = '';

    }
  });

  // sort button click
  var sort = document.getElementById('sort');
  sort.addEventListener("click", function (event) {
    event.preventDefault();
    var newState = todoFunctions.sortTodos(state);
    update(newState);
  })

  // add new item 
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    todoNode.className = 'todo-desc';


    // add unmarked checkbox
    var markBtn = document.createElement("input");
    if (todo.mark) {
      markBtn.setAttribute('checked', 'true');
    }
    markBtn.setAttribute("type", "checkbox");
    

    // checkbox toggle -mark-unmark-
    markBtn.addEventListener('click', function (event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markBtn);

    // add priority to new item description and style when toggle marked botton
    var span = document.createElement('span');
    span.textContent = todo.description + ": ( " + todo.priority + " )";
    if (todo.mark) {
      span.classList.add("mark");
      todoNode.appendChild(span);

    } else {
      span.style.color = 'white';
      todoNode.appendChild(span);
    }


    // add the delete button icon 
    var deleteButtonNode = document.createElement('span');
    deleteButtonNode.className = 'far fa-trash-alt icon';

    // delete item and confir message
    deleteButtonNode.addEventListener('click', function (event) {
      var confirmmessage = confirm("Are You Sure ?");
      if (confirmmessage) {

        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      } 
    });
    todoNode.appendChild(deleteButtonNode);
    return todoNode;
  };


  // you should not need to change this function
  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function (state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();