
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [];

  // This function takes a todo, it returns the DOM node representing that todo
  var submit = document.getElementById('add');

    submit.addEventListener('click', function (event) {
      event.preventDefault();
      var descriptionToDo = document.getElementById("description");
      var dateToDO = document.getElementById("date").value;
      var idToDo = todoFunctions.generateId();
      var markToDo = false;
      if (descriptionToDo.value.trim() === '') {
         alert('You must enter Description ! ');
      } else {
          var newItem = {
          id: idToDo,
          description: descriptionToDo.value,
          date: dateToDO,
          mark: markToDo
      };

      var newState = todoFunctions.addTodo(state, newItem);

      update(newState);
      descriptionToDo.value = '';
    }
  });

  // create new item 
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    todoNode.className = 'todo-desc';

  //mark item
    var markBtn = document.createElement("input");
    if (todo.mark) {
      markBtn.setAttribute('checked', 'true');
    }
    markBtn.setAttribute("type", "checkbox");
    markBtn.addEventListener('click', function (event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);

    });
    todoNode.appendChild(markBtn);

    // add contant to new item
    var span = document.createElement('span');
    span.textContent = todo.description;

    // make style to contant we marked
    if (todo.mark) {

      span.style.background = "#d6d62a";
      span.style.color = "black";
      span.style.padding = "0px 15px";
      todoNode.appendChild(span);

    } else {
      span.style.color = 'white';
      todoNode.appendChild(span);
    }
    // this adds the delete button
    var deleteButtonNode = document.createElement('span');
    deleteButtonNode.className = 'far fa-trash-alt icon';

    deleteButtonNode.addEventListener('click', function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
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

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();