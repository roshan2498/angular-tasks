import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})

export class HighlightedDirective{

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighLight = new EventEmitter();
    
    constructor(){
        console.log('Directive Created!!');
    }

    @HostBinding('class.highlighted')
    get cssClasses(){
        return this.isHighlighted;
    }

    @HostListener('mouseover',['$event'])
    mouseOver($event:any){
        console.log($event)
        this.isHighlighted = true;
        this.toggleHighLight.emit(this.isHighlighted);
    }
    
    @HostListener('mouseleave')
    mouseLeave(){
        this.isHighlighted = false;
        this.toggleHighLight.emit(this.isHighlighted);
    }

    toggle(){
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighLight.emit(this.isHighlighted);
    }
}