
var todoFunctions = {

    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
      var idCounter = 0;

      function incrementCounter() {
        return (idCounter += 1);
      }

      return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
      return todos.map(function(todo){
        return JSON.parse(JSON.stringify(todo));
      });
    },

    // add function
    addTodo: function(todos, newTodo) {
      var copyOfTodoArray = todoFunctions.cloneArrayOfObjects(todos);
      return  copyOfTodoArray.concat(newTodo);
},

    // delete function
    deleteTodo: function(todos, idToDelete) {
       var cloned = todoFunctions.cloneArrayOfObjects(todos);
       return cloned.filter(function(item){
       return item.id != idToDelete;
      });
    },

    // mark function
    markTodo: function(todos, idToMark) {
      var newArr = todoFunctions.cloneArrayOfObjects(todos);
      return newArr.map(function(item) {
      if(item.id==idToMark){
         item.mark = !item.mark
     }
    return item;
});

    },

    // Sort Function

    sortTodos: function(todos) {
      var newar = todoFunctions.cloneArrayOfObjects(todos);
      var arr2=[];
      for(var i=0; i<newar.length; i++){
        if(newar[i].priority==='high'){
          arr2.push(newar[i])
        }
      }
      for(var i=0; i<newar.length; i++){
        if(newar[i].priority==='medium'){
          arr2.push(newar[i])
        }
      }
      for(var i=0; i<newar.length; i++){
        if(newar[i].priority==='low'){
          arr2.push(newar[i])
        }
      }
      return arr2;
   
       },
     };
     
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }
