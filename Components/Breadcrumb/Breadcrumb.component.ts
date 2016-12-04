import { Component, OnInit ,Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
	selector: 'ns-breadcrumb',
	template: `
		<nav  [style.background-color]="background">
			<div class="nav-wrapper">
				<div class="col s12">
					<ng-content>
					</ng-content>
				</div>
			</div>
		</nav>
	`,
	styleUrls:['breadcrumb.component.css']

})
export class BreadcrumbComponent implements OnInit {
	@Input() public type:string;
	@Input() public separator:string;
	@Input() public background:string="#26a69a";
	typeClass:string;
	ngOnInit() {
		if(this.type)
		{
			switch(this.type)
			{
				case "basic":this.typeClass="basic-bread";
				case "black":this.typeClass="black-bread";
				case "basic":this.typeClass="basic-bread";
				default:this.typeClass="";

			}
		}
	 }
}


