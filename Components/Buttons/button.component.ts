import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const ALERT_TEMPLATE = `
  <a class="waves-effect {{wave}} btn {{size}} {{color}} " [class.btn-floating]="float" [class.disabled]="disabled" >
    <ng-content></ng-content>
  </a>
  `;

// TODO: templateUrl
@Component({
  selector: 'ns-button',
  template: ALERT_TEMPLATE
})
export class ButtonComponent implements OnInit {
  @Input() public type:string = 'primary';
  @Input() public wave:string = '';
  @Input() public color:string = '';
  @Input() public size:string = '';
  @Input() public float:boolean=false;
  @Input() public disabled:boolean=false;
  @Output() public close:EventEmitter<ButtonComponent> = new EventEmitter<ButtonComponent>(false);

  public closed:boolean;
  protected classes:Array<string> = [];
  public ngOnInit():any {
    console.log("float="+this.float);
    if(this.wave){
      this.wave="waves-"+this.wave;
    }
    if(this.size)
    {
      this.size="btn-"+this.size;
    }
  }
}
