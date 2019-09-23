import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
    showIds = false;
    constructor(
        public postsService: PostsService,
        public route: ActivatedRoute,
        public router: Router
    ) {}
    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            this.showIds = !!params.showIds;
        });

        this.route.fragment.subscribe(fragment => {
            console.log('Fragment: ', fragment);
        });
    }
    showIdsProgram() {
        this.router.navigate(['/posts'], { queryParams: { showIds: true }, fragment: 'program' });
    }
}
