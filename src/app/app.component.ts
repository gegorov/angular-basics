import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo, TodosService } from './todos.servers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    todos: Todo[] = [];
    error = '';
    todoTitle = '';
    loading = false;

    constructor(private todosService: TodosService) {}

    ngOnInit() {
        this.fetchTodos();
    }

    addTodo() {
        if (!this.todoTitle.trim()) {
            return;
        }

        const newTodo: Todo = {
            title: this.todoTitle,
            completed: false,
        };

        this.todosService.addTodo(newTodo).subscribe(todo => {
            this.todos.push(todo);
            this.todoTitle = '';
        });
    }

    fetchTodos() {
        this.loading = true;
        this.todosService.fetchTodos().subscribe(
            response => {
                this.todos = response;
                this.loading = false;
            },
            error => {
                this.error = error.message;
            }
        );
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id).subscribe(() => {
            this.todos = this.todos.filter(t => t.id !== id);
        });
    }

    completeTodo(id: number) {
        this.todosService.completeTodo(id).subscribe(todo => {
            this.todos.find(t => t.id === id).completed = true;
        });
    }
}
