import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
    title: string;
    text: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    p: Promise<string> = new Promise(resolve =>
        setTimeout(() => resolve('THIS IS PROMISE!!!!'), 3000)
    );

    date$: Observable<Date> = new Observable(obs => {
        setInterval(() => {
            obs.next(new Date());
        }, 1000);
    });

    date: Date;

    ngOnInit(): void {
        this.date$.subscribe(date => {
            this.date = date;
        });
    }
}
