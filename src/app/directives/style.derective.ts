import {
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
    Input,
    HostBinding,
} from '@angular/core';

@Directive({ selector: '[appStyle]' })
export class StyleDirective {
    @Input('appStyle') color: string;
    @Input() dStyles: {
        border?: string;
        fontWeight?: string;
        borderRadius?: string;
    };

    @HostBinding('style.color') elColor = null;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
        // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'blue');
        // elementRef.nativeElement.style.color = 'red';
    }

    @HostListener('click', ['$event']) onClick(event: Event) {
        console.log('event: ', event.target);
    }
    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color;
        // this.renderer2.setStyle(
        //     this.elementRef.nativeElement,
        //     'color',
        //     this.color
        // );
        // this.renderer2.setStyle(
        //     this.elementRef.nativeElement,
        //     'font-weight',
        //     this.dStyles.fontWeight
        // );
        // this.renderer2.setStyle(
        //     this.elementRef.nativeElement,
        //     'border',
        //     this.dStyles.border
        // );
        // this.renderer2.setStyle(
        //     this.elementRef.nativeElement,
        //     'border-radius',
        //     this.dStyles.borderRadius
        // );
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = null;
        // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', null);
        // this.renderer2.setStyle(
        //     this.elementRef.nativeElement,
        //     'font-weight',
        //     null
        // );
        // this.renderer2.setStyle(this.elementRef.nativeElement, 'border', null);
        // this.renderer2.setStyle(
        //     this.elementRef.nativeElement,
        //     'border-radius',
        //     null
        // );
    }
}
