import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';


import { AppComponent } from './app.component';
import { layoutComponent } from './layout/layout.component';
import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';
import { ServiceComponent } from  './service/service.component';
import { NewsComponent } from  './news/news.component';
import { DetailComponent } from  './detail/detail.component';
import { CaseComponent } from  './case/case.component';
import { JoinComponent } from  './join/join.component';
import { UavComponent } from  './uav/uav.component';
import { NothingComponent } from './no.component';
//public
import { topComponent }  from './public/top.component';
import { footerComponent }  from './public/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout/home', pathMatch: 'full' },
  { path:'layout',component:layoutComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'service', component: ServiceComponent},
      {path: 'news', component: NewsComponent},
      {path: 'detail', component: DetailComponent},
      {path: 'case', component: CaseComponent},
      {path: 'join', component: JoinComponent},
      {
        path: '', component: HomeComponent
      }
    ]
  },
  {path: 'uav', component: UavComponent},
  {path:'**',component:NothingComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule {}
