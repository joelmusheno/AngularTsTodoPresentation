﻿/// <reference path="typings/tsd.d.ts" />

"use strict";

interface ITodoService {
    getTodos(): ng.IPromise<Array<AngularTodo.Models.ITodo>>;
    addTodo(todo: AngularTodo.Models.ITodo);
}

class TodoService implements ITodoService {
    static $inject = ["$http", "$q"];
    static serviceName = "todo";

    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {   
    }

    getTodos(): angular.IPromise<AngularTodo.Models.ITodo[]> {
        var deferred = this.$q.defer();
        this.$http({
            method: "GET",
            url: "/api/todo/getall"
        }).success(data => {
            deferred.resolve(data);
        }).error(() => {
            deferred.reject("error getting all todos.");
        });
        return deferred.promise;
    }

    addTodo(todo: AngularTodo.Models.ITodo) {
        var deferred = this.$q.defer();
        this.$http({
            method: "POST",
            url: "/api/todo/add",
            data: todo
        }).success(data => {
            deferred.resolve(data);
        }).error(() => {
            deferred.reject("could not add");
        });
        return deferred.promise;
    }
}

angular.module("todo.services", [])
    .service(TodoService.serviceName, TodoService);