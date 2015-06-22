/// <reference path="typings/tsd.d.ts" />
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
    TodoService.di = "todo";
    return TodoService;
})();
angular.module("todo.services", [])
    .service(TodoService.di, TodoService);
