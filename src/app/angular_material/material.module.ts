import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        FlexLayoutModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        FlexLayoutModule
    ]
})

export class MaterialModule {
// tslint:disable-next-line:eofline
}