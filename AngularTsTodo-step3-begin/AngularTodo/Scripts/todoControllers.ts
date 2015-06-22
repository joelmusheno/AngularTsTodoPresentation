/// <reference path="typings/tsd.d.ts" />

function todoController($scope, todo: ITodoService) {
    $scope.todos = [];
    function getAll() {
        var promised = todo.getTodos();
        promised.then(data => {
            $scope.todos = data;
        });
    }

    $scope.addTodo = () => {
        var promised = todo.addTodo({
            Description: $scope.todoDescriptionAdd,
            Complete: false
        });
        promised.finally(() => {
            getAll();
        });
    }

    if ($scope.todos.length === 0)
        getAll();
}
todoController.$inject = ["$scope", TodoService.di];

angular.module("todo.controllers", [])
    .controller("todoController", todoController); 