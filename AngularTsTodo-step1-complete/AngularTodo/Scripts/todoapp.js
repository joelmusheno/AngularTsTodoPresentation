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
Todo: rename files for typescript
Todo: add mappings from tsd +++ tsd install angularjs/ --save +++ tsd install jquery --save +++ incldue all files
Todo: reference typeings
Todo: project ignore the evil angular-scenario-1.2.d
*/
"use strict";
var todoApp = angular.module("todo", [
    "todo.controllers",
    "todo.services"]);
/// <reference path="typings/tsd.d.ts" />
"use strict";
function todoService($http, $q) {
    this.getTodos = function () {
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: "/api/todo/getall"
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            deferred.reject("error getting all todos.");
        });
        return deferred.promise;
    };
    this.addTodo = function (todo) {
        var deferred = $q.defer();
        $http({
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
}
todoService.$inject = ["$http", "$q"];
angular.module("todo.services", [])
    .service("todo", todoService);
