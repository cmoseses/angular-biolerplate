import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {GirdComponent} from './gird.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GirdComponent],
  exports: [GirdComponent]
})

export class GirdModule {
}
