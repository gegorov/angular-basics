import { Component, OnInit } from '@angular/core';

export interface Post {
    title: string;
    text: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    searchQuery = '';

    posts: Post[] = [
        {
            title: 'magic is happening',
            text:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quia?',
        },
        {
            title: 'This is kind of a Magic',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nostrum possimus
                autem vitae est veritatis adipisci molestiae voluptates ex suscipit.`,
        },
        {
            title: 'The show must go on',
            text: `
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolores repellat
                facilis totam iusto odio ipsam, temporibus libero soluta quasi autem nihil
                architecto vitae nemo aspernatur at rem eum vel quo nulla sed impedit modi beatae.
                Itaque labore, aliquid voluptates necessitatibus iusto praesentium ipsum omnis
                accusantium placeat doloribus. Quia, totam?
                `,
        },
        {
            title: 'Radio ga ga',
            text: `
                I'd sit alone and watch your light
                My only friend through teenage nights
                And everything I had to know
                I heard it on my radio`,
        },
    ];

    addPost() {
        this.posts.unshift({
            title: 'angular',
            text: 'blablalbal blabla lab lab',
        });
    }
}
