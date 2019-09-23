import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { RefDerective } from './ref.directive';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @ViewChild(RefDerective, { static: false }) refDir: RefDerective;
    constructor(
        private resolver: ComponentFactoryResolver,
        private title: Title,
        private meta: Meta
    ) {
        const t = title.getTitle();
        this.meta.addTags([
            {
                name: 'keywords',
                content: 'angular, google, appcomponent',
            },
            {
                name: 'description',
                content: 'this is app component',
            },
        ]);
        console.log('title: ', t);
    }

    showModal() {
        const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
        this.refDir.containerRef.clear();

        const component = this.refDir.containerRef.createComponent(modalFactory);

        component.instance.title = 'Dynamic Modal';
        component.instance.close.subscribe(() => {
            this.refDir.containerRef.clear();
        });
    }
}
