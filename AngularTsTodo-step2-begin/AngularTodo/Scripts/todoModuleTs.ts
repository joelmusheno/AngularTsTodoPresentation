/// <reference path="typings/tsd.d.ts" />

/*
Todo: Add app types with typelite
Todo: Return promises with new types
Todo: Refactor service to class
Todo: Consume service in Controller
Todo: show name refactor in 'di'
*/

"use strict";
var todoApp = angular.module(
    "todo", [
        "todo.controllers",
        "todo.services"]);