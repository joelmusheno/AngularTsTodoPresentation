/// <reference path="typings/tsd.d.ts" />

/*
Todo: Add controller scope interface 
Todo: Refactor Controller to class
*/
"use strict";
var todoApp = angular.module(
    "todo", [
        "todo.controllers",
        "todo.services"]);