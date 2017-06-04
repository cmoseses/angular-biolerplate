import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeContentComponent} from './home-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeContentComponent],
  exports: [HomeContentComponent]
})

export class HomeContentModule {
}
