var test = require('tape');
var todoFunctions = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});


test('deleteToDo list', function(assert) {
  var actual = todoFunctions.deleteTodo
    ([
      {
        id: 0,
        description: 'read a chapter',
        done: true,
      },{
        id: 1,
        description: 'play a game',
        done: false,
      }],1);

    var expected =[{
  id: 0,
  description: 'read a chapter',
  done: true,
}]

  assert.deepEqual(actual, expected, 'should delete a task');
  assert.end();
});


  test('AddToDoTest', function(t) {
    var actual= todoFunctions.addTodo( [],{
      id:0,
      description: "watching",
      done: false,
    });

    var expected =[{
      id:0,
      description: "watching",
      done: false,
    }]


    t.deepEqual(actual, expected,"should return sleep");
    t.end();
  });


  test('test for Sort', function(t){
    var a= "d";
    
      var ar = [
        {Description:"a" , priority:"low"},
        {Description:"b" , priority:"high"},
        {Description:"c" , priority:"low"},
    
        // {Description:"c" , priority:"low"}
      
    
    ]
    
      var actual = todoFunctions.sortTodos(ar);
    var expcted = [
      { Description: 'b', priority: 'high' },
       { Description: 'a', priority: 'low' }, 
       { Description: 'c', priority: 'low' }
    
    ]
    
      t.deepEqual(actual,expcted,'Un Sorted');
    
      t.end();
    });