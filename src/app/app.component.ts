import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
    completed: boolean;
    title: string;
    id?: number;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    todos: Todo[] = [];

    todoTitle = '';
    loading = false;

    constructor(private http: HttpClient) {}

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
        console.log('newtodo: ', newTodo);
        this.http
            .post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
            .subscribe(todo => {
                console.log('todo: ', todo);
                this.todos.push(todo);
                this.todoTitle = '';
            });
    }

    fetchTodos() {
        this.loading = true;
        setTimeout(() => {
            this.http
                .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .subscribe(response => {
                    this.todos = response;
                    this.loading = false;
                });
        }, 1000);
    }
}
