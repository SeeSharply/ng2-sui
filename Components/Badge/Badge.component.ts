import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'ns-badge',
	templateUrl: `
	<span [class.new]="isnew" class="badge {{color}}" [attr.data-badge-caption]="placement">
		<ng-content></ng-content>
	</span>
	`
})

export class BadgeComponent implements OnInit {
@Input() public isnew:boolean=false; 
@Input() public color:boolean; 
@Input() public placement:string; 
	ngOnInit() { }
}