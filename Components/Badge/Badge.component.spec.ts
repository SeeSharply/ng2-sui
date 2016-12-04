import { TestBed, inject } from '@angular/core/testing';

import { BadgeComponent } from './Badge.component';

describe('a Badge component', () => {
	let component: BadgeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BadgeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BadgeComponent], (BadgeComponent) => {
		component = BadgeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});