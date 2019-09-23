import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    sub: Subscription;

    constructor() {
        const intervalStream$ = interval(1000).pipe(
            filter(value => value % 2 === 0),
            map(value => `mapped value: ${value}`)
        );

        this.sub = intervalStream$.subscribe(value => {
            console.log(value);
        });
    }

    stop() {
        this.sub.unsubscribe();
    }
}
