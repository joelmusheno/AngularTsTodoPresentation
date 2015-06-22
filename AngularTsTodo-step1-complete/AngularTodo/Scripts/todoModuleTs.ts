/// <reference path="typings/tsd.d.ts" />

/*
Todo: rename files for typescript
Todo: add mappings from tsd +++ tsd install angularjs/ --save +++ tsd install jquery --save +++ incldue all files
Todo: reference typeings 
Todo: project ignore the evil angular-scenario-1.2.d
*/

"use strict";
var todoApp = angular.module(
    "todo", [
        "todo.controllers",
        "todo.services"]);