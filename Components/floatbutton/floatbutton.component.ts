import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const ALERT_TEMPLATE = `
  <a [class.btn-floating]="float" class=" waves-effect {{wave}} btn {{size}} {{color}} ">
    <ng-content></ng-content>
  </a>
  `;

// TODO: templateUrl
@Component({
  selector: 'ns-floatbtn',
  template: ALERT_TEMPLATE
})
export class FloatbuttonComponent implements OnInit {
  @Input() public type:string = 'primary';
  @Input() public wave:string = '';
  @Input() public color:string = '';
  @Input() public size:string = '';
  @Input() public float:boolean;
  @Output() public close:EventEmitter<FloatbuttonComponent> = new EventEmitter<FloatbuttonComponent>(false);

  public closed:boolean;
  protected classes:Array<string> = [];

  public ngOnInit():any {
    if(this.wave){
      this.wave="waves-"+this.wave;
    }
    if(this.size)
    {
      this.size="btn-"+this.size;
    }
  }
}
