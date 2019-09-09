import { Component } from '@angular/core';

@Component({
    selector: 'app-post4',
    template: `
        <div class="post4">
            <h2>Post4 Title</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                quae labore molestias amet laborum tempore possimus dolorem.
            </p>
        </div>
    `,
    styles: [
        `
            .post4 {
                padding: 0.5rem;
                border: 2px solid blue;
                width: 450px;
            }

            h2 {
                font-size: 1rem;
                color: red;
            }
        `,
    ],
})
export class Post4Component {}
