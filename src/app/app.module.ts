import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FrisbeeListComponent } from './frisbee-list/frisbee-list.component'
import { FrisbeeComponent } from './frisbee/frisbee.component'
import { FrisbeeDetailComponent } from './frisbee-detail/frisbee-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    FrisbeeListComponent,
    FrisbeeComponent,
    FrisbeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
