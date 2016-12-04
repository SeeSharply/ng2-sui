import { Component, OnInit ,Input} from '@angular/core';

@Component({
	selector: 'ns-action-btns',
	templateUrl: 'ActionBtnsContent.component.html'
})

export class ActionBtnsContentComponent implements OnInit {
@Input() public type:string = '';
	ngOnInit() { }
}