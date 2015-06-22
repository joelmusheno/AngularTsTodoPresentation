/// <reference path="typings/tsd.d.ts" />
var TodoController = (function () {
    function TodoController($scope, todo) {
        var _this = this;
        this.$scope = $scope;
        this.todo = todo;
        $scope.addTodo = function () {
            var promised = todo.addTodo({
                Description: $scope.todoDescriptionAdd,
                Complete: false
            });
            promised.finally(function () {
                _this.getAll();
            });
        };
    }
    TodoController.prototype.getAll = function () {
        var _this = this;
        var promised = this.todo.getTodos();
        promised.then(function (data) {
            _this.$scope.todos = data;
        });
    };
    TodoController.$inject = ["$scope", TodoService.di];
    TodoController.di = "todoController";
    return TodoController;
})();
angular.module("todo.controllers", [])
    .controller(TodoController.di, TodoController);
