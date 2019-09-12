import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError, map, tap } from 'rxjs/operators';

export interface Todo {
    completed: boolean;
    title: string;
    id?: number;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
    constructor(private http: HttpClient) {}

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers: new HttpHeaders({
                myCustomHeader: 'hello',
            }),
        });
    }

    fetchTodos(): Observable<Todo[]> {
        return this.http
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: new HttpParams().set('_limit', '5'),
                observe: 'response',
            })
            .pipe(
                map(response => {
                    // console.log('Response: ', response);
                    return response.body;
                }),
                delay(500),
                catchError(error => {
                    console.log('Error: ', error.message);
                    return throwError(error);
                })
            );
    }

    deleteTodo(id: number): Observable<any> {
        return this.http
            .delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                observe: 'events',
            })
            .pipe(
                tap(event => {
                    console.log('Delete, event: ', event);
                    if (event.type === HttpEventType.Sent) {
                        console.log('Delete-Send, event: ', event);
                    }
                    if (event.type === HttpEventType.Response) {
                        console.log('Delete-Response, event: ', event);
                    }
                })
            );
    }

    completeTodo(id: number): Observable<any> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: true,
        });
    }
}
