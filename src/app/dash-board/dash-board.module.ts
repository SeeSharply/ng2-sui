// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { DashBoardComponent } from './dash-board.component';
import { Buttondemo.component.tsComponent } from '.e:/Code/Angular/ng2-semantic/src/app/demo/buttondemo.component.ts/buttondemo.component.ts.component';
import { ButtondemoComponent } from '.e:/Code/Angular/ng2-semantic/src/app/demo/buttondemo/buttondemo.component';

@NgModule({
    imports: [

    ],
    declarations: [
        DashBoardComponent,,
    Buttondemo.component.tsComponent,
    ButtondemoComponent
],
    exports: [
        DashBoardComponent,
    ]
})
export class DashBoardModule {

}
