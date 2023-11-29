import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingpageComponent } from './testingpage/testingpage.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { TheGetComponent } from './the-get/the-get.component';

const appRoutes: Routes = [
  { path: '', component: PortfolioPageComponent },
  { path: 'test', component: TestingpageComponent },
  { path: 'get', component: TheGetComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
