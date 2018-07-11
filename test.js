var test = require('tape');
var todoFunctions = require('./logic');

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