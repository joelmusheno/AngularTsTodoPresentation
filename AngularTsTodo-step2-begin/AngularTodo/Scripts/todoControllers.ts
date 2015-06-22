/// <reference path="typings/tsd.d.ts" />

"use strict";

function todoController($scope, todo:ITodoService) {
    $scope.todos = [];
    function getAll() {
        const promised = todo.getTodos();
        promised.then(data => {
            $scope.todos = data;
        });
    }

    $scope.addTodo = () => {
        var promised = todo.addTodo({
            Description: $scope.todoDescriptionAdd,
            Complete: false
        });
        promised.finally(function () {
            getAll();
        });
    }

    if ($scope.todos.length === 0)
        getAll();
}
todoController.$inject = ["$scope", "todo"];

angular.module("todo.controllers", [])
    .controller("todoController", todoController); 