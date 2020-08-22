import {Directive,ElementRef,OnInit,Input,Renderer2} from '@angular/core';
@Directive({
    selector:'[faBeffore]',
})
export class BefforeDirective implements OnInit{
    constructor(private el:ElementRef,private renderer: Renderer2){};
    @Input() private faBeffore:String;
    ngOnInit(){
        console.log(22222)
        let roundVal = `${this.faBeffore}`;
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', roundVal);
    }
}