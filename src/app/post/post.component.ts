import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService, Post } from '../posts.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    public post: Post;
    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService,
        private router: Router
    ) {}
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            console.log('Params: ', params);
            this.post = this.postsService.getById(parseInt(params.id, 10));
        });
    }

    loadPost() {
        this.router.navigate(['/posts', 44]);
    }
}
