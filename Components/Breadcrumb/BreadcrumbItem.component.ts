import { Component, OnInit ,Input} from '@angular/core';

@Component({
	selector: 'ns-breadcrumb-item',
	template: `<a href="{{to}}" ><ng-content></ng-content></a>`,
    styleUrls:['Breadcrumb.component.css']
})
export class BreadcrumbItemComponent implements OnInit {
	@Input() public to:string="#!";
	@Input() public color:string="";
	@Input() public type:string="light";
    typeClass:string="breadcrumb";
	ngOnInit() {
        if(this.type=="dark")
        {
            this.typeClass="breadcrumb breadcrumb-dark";
        }
	 }
}