import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    counter = 0;
    sub: Subscription;
    stream$: Subject<number> = new Subject<number>();

    constructor() {
        this.sub = this.stream$.subscribe(value => {
            console.log('Subscribe: ', value);
        });
    }

    stop() {
        this.sub.unsubscribe();
    }

    next() {
        this.counter++;
        this.stream$.next(this.counter);
    }
}
