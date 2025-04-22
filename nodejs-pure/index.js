var Store = require("@my_app/store").Store;

var store = new Store();

store.addTodo({ id: 1, text: "Learn JavaScript" });
store.addTodo({ id: 2, text: "Learn Node.js" });

var todo1 = store.getTodo(0);
var todo2 = store.getTodo(1);

console.log("Todo 1:", todo1);
console.log("Todo 2:", todo2);
