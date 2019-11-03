import { Component, Input, ElementRef, Renderer2, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1
  (click)="emit()"
  >{{text}} {{name2}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit, OnChanges {
  @Input() name2: string;
  // Input is for parent child communication

  @Input() color = 'grey';

  text = 'Hello';

  @Output()
  touch = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private el: ElementRef) { 
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'grey');
  }

  ngOnInit() {
    this
    .renderer
    .setStyle(this.el.nativeElement, 'color', this.color);
  }

  ngOnChanges() {
    this
    .renderer
    .setStyle(this.el.nativeElement, 'color', this.color);
  }

  emit() {
    this.touch.emit('touched');
  }

}
