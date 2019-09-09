import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-basics';
    inputValue = '';

    constructor() {}

    onInput(event: KeyboardEvent) {
        console.log('Event ', event);
        this.inputValue = (event.target as HTMLInputElement).value;
    }
    onClick() {
        console.log('Clicked!');
    }
    onBlur(str: string) {
        this.inputValue = str;
    }
}
