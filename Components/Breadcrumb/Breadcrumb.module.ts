import { NgModule } from '@angular/core';

import { BreadcrumbComponent }   from './Breadcrumb.component';
import { BreadcrumbItemComponent }   from './BreadcrumbItem.component';

@NgModule({
    imports: [],
    exports: [BreadcrumbComponent,BreadcrumbItemComponent],
    declarations: [BreadcrumbComponent,BreadcrumbItemComponent],
    providers: [],
})
export class BreadcrumbModule { }
