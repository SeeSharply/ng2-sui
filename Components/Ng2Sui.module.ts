import { NgModule } from '@angular/core';

import { ButtonModule }   from './buttons/button.module';
import { FloatbuttonModule }   from './floatbutton/floatbutton.module';
import { ActionBtnsContentModule }   from './ActionBtnsContent/ActionBtnsContent.module';
import { BadgeModule }   from './badge/badge.module';
import { BreadcrumbModule }   from './breadcrumb/breadcrumb.module';

@NgModule({
    imports: [],
    exports: [
        ButtonModule,
        FloatbuttonModule,
        ActionBtnsContentModule,
        BadgeModule,
        BreadcrumbModule
        ],
    providers: []
})
export class Ng2SuiModule { }
