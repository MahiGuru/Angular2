import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ 
    selector: '[myHighlight]'    
})

export class HighlightDirective {
    private el:HTMLElement;
    private _defaultColor : string = "blue";
    constructor(elem: ElementRef) {
        this.el = elem.nativeElement; 
    }
    @Input('myHighlight') highlightColor:string;

    @Input() set defaultColor(colorname:string){
        this._defaultColor = colorname || this._defaultColor;
    }



    @HostListener('mouseenter') OnMouseEnter(){
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') OnMouseLeave(){
        this.highlight("");
    }

    public highlight(color:string){
        this.el.style.backgroundColor = color;
    }
}
