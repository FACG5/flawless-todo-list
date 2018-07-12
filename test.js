var test = require('tape');
var todoFunctions = require('./logic');

// delete test
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

// add test
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


    t.deepEqual(actual, expected,"should return watching");
    t.end();
  });

// sort test 
  test('test for Sort', function(t){
  
      var ar = [
        {Description:"a" , priority:"low"},
        {Description:"b" , priority:"high"},
        {Description:"c" , priority:"low"},
  
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

    // mark function 

    test('Example test', function(t) {
  
      var ar = [
        {desc:"ali" , id:7 , mark:false}
      ]
    
      var actual = todoFunctions.markTodo(ar, 7);
      var expected = [
        {desc:"ali" , id:7 , mark: true}
      ]
      
    
      t.deepEqual(actual, expected, 'make tea should be undone');
      t.end();
    });
    
    test('Example test', function(t) {
      
      var ar = [
        {desc:"ali" , id:7 , mark:true}
      ]
    
      var actual = todoFunctions.markTodo(ar, 7);
      var expected = [
        {desc:"ali" , id:7 , mark: false}
      ]
      
    
      t.deepEqual(actual, expected, 'make tea should be done');
      t.end();
    });
