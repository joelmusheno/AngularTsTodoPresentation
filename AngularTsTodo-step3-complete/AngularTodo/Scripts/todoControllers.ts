/// <reference path="typings/tsd.d.ts" />

interface ITodoControllerScope extends ng.IScope {
    todos: Array<AngularTodo.Models.ITodo>;
    addTodo();
    todoDescriptionAdd: string;
}

class TodoController {
    static $inject = ["$scope", TodoService.di];
    static di = "todoController";

    constructor(private $scope: ITodoControllerScope, private todo: ITodoService) {

        this.$scope.addTodo = () => {
            var promised = todo.addTodo({
                Description: $scope.todoDescriptionAdd,
                Complete: false
            });
            promised.finally(() => {
                this.getAll();
            });
        }

        this.$scope.todos = [];
        if (this.$scope.todos.length === 0)
            this.getAll();
    }

    private getAll(): void {
        var promised = this.todo.getTodos();
        promised.then(data => {
            this.$scope.todos = data;
        });
    }
}
angular.module("todo.controllers", [])
    .controller(TodoController.di, TodoController); 