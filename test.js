var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
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
