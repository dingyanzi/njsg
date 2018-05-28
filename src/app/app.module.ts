import { NgModule,Component } from '@angular/core';
import { CommonModule , HashLocationStrategy , LocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteModule } from  './app-route.module';
import { BaiduMapModule } from 'angular2-baidu-map'

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

@NgModule({
  declarations: [
    AppComponent,
    layoutComponent,
    NothingComponent,
    topComponent,
    footerComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    NewsComponent,
    DetailComponent,
    CaseComponent,
    JoinComponent,
    UavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouteModule,
    BaiduMapModule.forRoot({ ak: 'your ak' }),
    NgZorroAntdModule.forRoot({ extraFontName: 'iconfont', extraFontUrl: './assets/fonts/iconfont' })
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
