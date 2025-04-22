function Store() {
  this.todos = [];
}

Store.prototype.addTodo = function (todo) {
  this.todos.push(todo);
};
Store.prototype.getTodos = function () {
  return this.todos;
};

Store.prototype.removeTodo = function (index) {
  this.todos.splice(index, 1);
};
Store.prototype.updateTodo = function (index, todo) {
  this.todos[index] = todo;
};
Store.prototype.clearTodos = function () {
  this.todos = [];
};
Store.prototype.getTodo = function (index) {
  return this.todos[index];
};

exports.Store = Store;
