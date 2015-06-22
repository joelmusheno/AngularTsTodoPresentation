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
    };
    if ($scope.todos.length === 0)
        getAll();
}
todoController.$inject = ["$scope", "todo"];
angular.module("todo.controllers", [])
    .controller("todoController", todoController);
/// <reference path="typings/tsd.d.ts" />
/*
Todo: Add app types with typelite
Todo: Return promises with new types
Todo: Refactor service to class
Todo: Consume service in Controller
Todo: show name refactor in 'di'
*/
"use strict";
var todoApp = angular.module("todo", [
    "todo.controllers",
    "todo.services"]);
/// <reference path="typings/tsd.d.ts" />
"use strict";
var TodoService = (function () {
    function TodoService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    TodoService.prototype.getTodos = function () {
        var deferred = this.$q.defer();
        this.$http({
            method: "GET",
            url: "/api/todo/getall"
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            deferred.reject("error getting all todos.");
        });
        return deferred.promise;
    };
    TodoService.prototype.addTodo = function (todo) {
        var deferred = this.$q.defer();
        this.$http({
            method: "POST",
            url: "/api/todo/add",
            data: todo
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            deferred.reject("could not add");
        });
        return deferred.promise;
    };
    TodoService.$inject = ["$http", "$q"];
    TodoService.serviceName = "todo";
    return TodoService;
})();
angular.module("todo.services", [])
    .service(TodoService.serviceName, TodoService);
