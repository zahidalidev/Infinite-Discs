import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FrisbeeDetailComponent } from './frisbee-detail/frisbee-detail.component'
import { FrisbeeListComponent } from './frisbee-list/frisbee-list.component'

const routes: Routes = [
  { path: 'frisbees', component: FrisbeeListComponent },
  { path: 'frisbees/:id', component: FrisbeeDetailComponent },
  { path: '**', redirectTo: 'frisbees' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
