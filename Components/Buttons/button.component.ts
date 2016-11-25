import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const ALERT_TEMPLATE = `
  <butotn class="btn btn-primary">
    <i class=""></i>
    <ng-content></ng-content>
  </div>
  `;

// TODO: templateUrl
@Component({
  selector: 'as-button',
  template: ALERT_TEMPLATE
})
export class AlertComponent implements OnInit {
  @Input() public type:string = 'primary';
  @Input() public dismissible:boolean;
  @Input() public dismissOnTimeout:number;

  @Output() public close:EventEmitter<AlertComponent> = new EventEmitter<AlertComponent>(false);

  public closed:boolean;
  protected classes:Array<string> = [];

  public ngOnInit():any {
    this.classes[0] = `btn-${this.type}`;
    if (this.dismissible) {
      this.classes[1] = 'alert-dismissible';
    } else {
      this.classes.length = 1;
    }
   
  }
}
