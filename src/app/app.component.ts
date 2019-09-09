import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    someStrangeArray = [1, 1, 2, 3, 5, 8, 13, 21];
    someStrangeObjectsArray = [
        {
            title: 'Post1',
            author: 'John Doe',
            comments: [
                { name: 'Donald Trump', text: 'my hands are the biggest' },
                { name: 'Barak', text: 'lol' },
                { name: 'Stormy Daniels', text: 'Pathetic...' },
            ],
        },
        {
            title: 'Post2',
            author: 'Bob Marley',
            comments: [
                { name: 'Jane Dow', text: 'Lorem' },
                { name: 'Stormy', text: 'lol-lol' },
            ],
        },
    ];
}
