// elementRef gives us access to the elementRef
// renderer is the renderer for the elements
import {Directive, ElementRef, Renderer} from '@angular/core'

// square bracket refers to attributes.
// host is used to subscribe to events.
@Directive({
    selector: '[autoGrow]', 
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    // a private variable (can also be done as per renderer in ctor)
    _el: ElementRef;
    
    constructor(el: ElementRef, private renderer: Renderer) {
        this._el = el;
    }
    
    onFocus() {
        this.renderer.setElementStyle(this._el.nativeElement, 'width', '200');
    }
    
    onBlur() {
        this.renderer.setElementStyle(this._el.nativeElement, 'width', '120');
    }
}