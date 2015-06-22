/// <reference path="typings/tsd.d.ts" />
"use strict";

/*

Todo: add mappings from tsd +++ tsd install angularjs/ --save +++ tsd install jquery --save +++ incldue all files
Todo: reference typeings 
Todo: project ignore the evil angular-scenario-1.2.d
*/

var todoApp = angular.module(
    "todo", [
    "todo.controllers",
    "todo.services"]);