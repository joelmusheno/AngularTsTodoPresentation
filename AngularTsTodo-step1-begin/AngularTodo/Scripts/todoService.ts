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
    }
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
    }
}
todoService.$inject = ["$http", "$q"];

angular.module("todo.services", [])
    .service("todo", todoService);