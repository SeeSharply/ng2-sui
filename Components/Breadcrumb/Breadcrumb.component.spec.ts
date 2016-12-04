import { TestBed, inject } from '@angular/core/testing';

import { BreadcrumbComponent } from './Breadcrumb.component';

describe('a Breadcrumb component', () => {
	let component: BreadcrumbComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BreadcrumbComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BreadcrumbComponent], (BreadcrumbComponent) => {
		component = BreadcrumbComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});