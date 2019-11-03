import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'change-bg',
  template: `<button 
  (click)="changeBg()" 
  >{{content}}</button>
  <br><p>hello</p><p>hello1</p><h1 #heading>Hello Dublin</h1>`,
  styles: [`button { padding: 10px; }`]
})
export class ChangeBgComponent implements AfterViewInit{

  // @ViewChild('body')
  // body: ElementRef;
  // The elment needs to have a #localRef

  body = this.el.nativeElement.ownerDocument.body;
  pTag;
  @ViewChild('heading') myHeading; 


  activateColor = 'white';

  @Output()
  colorChange = new EventEmitter<string>();
  // EventEmitter is for child parent communication

  @Output()
  changeTitle = new EventEmitter<string>();


  content = 'Change Background';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeBg() {
    
    // this.body.nativeElement.style.background = 'lightblue';

    // this
    // .renderer
    // .selectRootElement('body')
    // .style
    // .background = 'lightblue';
    // Erases innerHTML
    
    this.colorChange.emit(this.activateColor);

    this.activateColor === 'white'
    ? this.activateColor = 'lightblue'
    : this.activateColor = 'white'

    this.renderer.setStyle(
      this.body,
      'background',
      this.activateColor
    )

    this.changeTitle.emit('Angular 8');

  }

  ngAfterViewInit(){
    // accessing html element through injecting ElementRef (see constructor)
    // and using querySelector 
    this.pTag = this.el.nativeElement.querySelectorAll('p');
    console.log(this.pTag[0].innerText);
    // accessing html element through viewchild
    console.log(this.myHeading.nativeElement.innerText);
  }

}
