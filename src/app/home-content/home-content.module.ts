import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeContentComponent} from './home-content.component';
import {GirdModule} from '../gird/gird.module';
import {LogService} from '../services/log.service';
import {DropdownModule} from '../dropdown/dropdown.module';

@NgModule({
  imports: [CommonModule, GirdModule, DropdownModule],
  declarations: [HomeContentComponent],
  exports: [HomeContentComponent],
  providers: [LogService]
})

export class HomeContentModule {
}
