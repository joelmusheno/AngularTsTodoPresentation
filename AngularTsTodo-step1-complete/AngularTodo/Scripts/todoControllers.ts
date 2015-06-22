/// <reference path="typings/tsd.d.ts" />

"use strict";

function todoController($scope, todo) {
    $scope.todos = [];
    function getAll() {
        var promised = todo.getTodos();
        promised.then(function (data) {
            $scope.todos = data;
        });
    }

    $scope.addTodo = function () {
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