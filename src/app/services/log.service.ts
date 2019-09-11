import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LogService {
    public log(text) {
        console.log(`Log: ${text}`);
    }
}
