
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [];

  // This function takes a todo, it returns the DOM node representing that todo
  var submit = document.getElementById('add');

  submit.addEventListener('click',function(event){

  event.preventDefault();
  
  var descriptionToDo = document.getElementById("description");
  var selectToDo = document.getElementById("select").value;
  var idToDo = todoFunctions.generateId();
  var markToDo = false;
  if(descriptionToDo.value.trim()===''){
    alert('You must enter Description ! ');
  }
  else{
  var newItem = {id:idToDo , description:descriptionToDo.value,priority:selectToDo,mark:markToDo};
  var newState = todoFunctions.addTodo(state,newItem);

  update(newState);
  descriptionToDo.value='';
  
  }
   });

   // 
   var sort = document.getElementById('sort');
   sort.addEventListener("click",function(event){
     event.preventDefault();
     var newState = todoFunctions.sortTodos(state);
     update(newState);
   })


  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.className='todo-desc';
    // you will need to use addEventListener


    // add span holding description
    var markBtn = document.createElement("input");
    if(todo.mark){
      markBtn.setAttribute('checked','true');
    }

    markBtn.setAttribute("type", "checkbox");
    // markBtn.setAttribute("id", "checkbox");


    markBtn.addEventListener('click', function(event) {    
    //  markBtn.setAttribute()
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      
    });
  
  
    todoNode.appendChild(markBtn);

var span = document.createElement('span');
span.textContent = todo.description+ ": ( "+todo.priority+" )";
if(todo.mark){
  span.classList.add("mark");

  // span.style.background="#d6d62a";
  // span.style.color="black";
  // span.style.padding="0px 15px";
todoNode.appendChild(span);

}
else{
  span.style.color='white';
  todoNode.appendChild(span);
}
    // this adds the delete button
    var deleteButtonNode = document.createElement('span');
    deleteButtonNode.className='far fa-trash-alt icon';

    deleteButtonNode.addEventListener('click', function(event) {
      var confirmmessage = confirm("Are You Sure ?");
      if(confirmmessage){
      
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
      }
      else{

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

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();