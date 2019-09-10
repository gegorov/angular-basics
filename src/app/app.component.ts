import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
    posts: Post[] = [
        {
            title: 'Learning Angular components',
            text: 'It is a long process. I am still learning',
            id: 1,
        },
        // {
        //     title: 'Next Post',
        //     text:
        //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dignissimos?',
        //     id: 2,
        // },
        // {
        //     title: 'Lipsum',
        //     text:
        //         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate quisquam reprehenderit at eum repellendus!',
        //     id: 3,
        // },
    ];

    ngOnInit(): void {
        setTimeout(() => {
            console.log('timeout');
            console.log(this.posts);
            this.posts[0] = {
                ...this.posts[0],
                title: 'changed BBWWAAAHHAHAH',
                text: this.posts[0].text.toUpperCase(),
            };

            console.log(this.posts);
        }, 5000);
    }

    updatePosts(post: Post) {
        this.posts.unshift({
            ...post,
            id: this.posts[0] ? this.posts[0].id + 1 : 1,
        });
        console.log('recived: ', post);
    }

    removePost(id: number) {
        console.log('id to be removed: ', id);
        this.posts = this.posts.filter(post => post.id !== id);
    }
}
