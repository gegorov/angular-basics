import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    sub: Subscription;

    constructor() {
        const stream$ = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1500);
            setTimeout(() => {
                observer.error('Something went wrong');
            }, 2000);
            setTimeout(() => {
                observer.complete();
            }, 2100);
            setTimeout(() => {
                observer.next(2);
            }, 2500);
        });

        this.sub = stream$.subscribe(
            value => {
                console.log('next: ', value);
            },
            error => {
                console.log('error: ', error);
            },
            () => console.log('Completed!')
        );
    }

    stop() {
        this.sub.unsubscribe();
    }
}
