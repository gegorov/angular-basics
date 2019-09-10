import {
    Component,
    OnInit,
    Input,
    ContentChild,
    ElementRef,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// DoCheck,
export class PostComponent
    implements
        OnInit,
        OnChanges,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy {
    @Input() post: Post;
    @Output() onRemove = new EventEmitter<number>();

    @ContentChild('info', { static: true }) infoRef: ElementRef;

    constructor() {
        console.log('Constructor');
    }

    removePost() {
        console.log('inside post component: ', this.post.id);
        this.onRemove.emit(this.post.id);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }
    ngOnInit() {
        // console.log(this.infoRef.nativeElement);
        console.log('ngOnInit');
    }

    // ngDoCheck(): void {
    //     console.log('ngDoCheck');
    // }

    ngAfterContentInit() {
        console.log('afterContentinit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked()');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit()');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy()');
    }
}
