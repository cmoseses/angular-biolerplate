import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeContentComponent} from './home-content.component';
import {GirdModule} from '../gird/gird.module';

@NgModule({
  imports: [CommonModule, GirdModule],
  declarations: [HomeContentComponent],
  exports: [HomeContentComponent]
})

export class HomeContentModule {
}
