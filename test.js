var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});


test('deleteToDo list', function(assert) {
  var actual = logic.deleteTodo
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
    var actual= logic.addTodo( [],{
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

