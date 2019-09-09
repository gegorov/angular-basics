import { Component } from '@angular/core';

export interface Post {
    title: string;
    text: string;
    id?: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    posts: Post[] = [
        {
            title: 'Learning Angular components',
            text: 'It is a long process. I am still learning',
            id: 1,
        },
        {
            title: 'Next Post',
            text:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dignissimos?',
            id: 2,
        },
        {
            title: 'Lipsum',
            text:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate quisquam reprehenderit at eum repellendus!',
            id: 3,
        },
    ];

    updatePosts(post: Post) {
        this.posts.unshift(post);
        console.log('recived: ', post);
    }
}
