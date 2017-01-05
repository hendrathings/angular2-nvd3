import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NvD3Component } from './angular2-nvd3.component';
import { NvD3Directive } from './angular2-nvd3.directive';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        NvD3Component,
        NvD3Directive
    ],
    exports: [
        NvD3Component,
        NvD3Directive
    ]
})
export class NvD3Module { }
