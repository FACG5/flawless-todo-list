// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

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


    addTodo: function(todos, newTodo) {
      console.log(todos,'todos');
      console.log(newTodo,'newTodo');
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // returns a new array, it should contain todos with the newTodo added to the end.
      // add an id to the newTodo. You can use the generateId function to create an id.
      // hint: array.concat
      var newTodo1 = todoFunctions.cloneArrayOfObjects(todos);
      //newTodo1.push(newTodo);

      return  newTodo1.concat(newTodo);





},

    deleteTodo: function(todos, idToDelete) {
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // return a new array, this should not contain any todo with an id of idToDelete
       var cloned = todoFunctions.cloneArrayOfObjects(todos);
       return cloned.filter(function(item){
       return item.id != idToDelete;
      });


      // hint: array.filter
    },
    markTodo: function(todos, idToMark) {
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // in the new todo array, all elements will remain unchanged except the one with id: idToMark
      // this element will have its done value toggled
      // hint: array.map
      var newArr = todoFunctions.cloneArrayOfObjects(todos);
// console.log(newArr);
// newArr[0].desc.strike();
// newArr[0].mark = !newArr[0].mark;
// return newArr;
  return newArr.map(function(item) {
    if(item.id==idToMark){
      item.mark = !item.mark
    
    }
    return item;
});

    },
    sortTodos: function(todos) {
      var newar = todoFunctions.cloneArrayOfObjects(todos);
   return newar.sort(function(a, b) {
     var x = a.priority.toLowerCase();
     var y = b.priority.toLowerCase();
   
     if (x <y) {
       return -1;
     }
   
     if (x > y) {
       return 1;
     }
     return 0;
   });
   
       },
     };
     


  // Why is this if statement necessary?
  // The answer has something to do with needing to run code both in the browser and in Node.js
  // See this article for more details:
  // http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }
