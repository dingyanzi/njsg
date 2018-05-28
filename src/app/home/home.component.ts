import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _isSpinning:boolean = true;
  bannerArr:Array<any>  = [];
  serviceArr:Array<any> = [];
  caseArr:Array<any> = [];
  newsArr:Array<any> = [];

  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
  }

  //案例切换
  num:number = 0;
  move:number = 0;
  right(){
    this.num++;
    if(this.num>=this.caseArr.length/3){
      this.num=0;
    }
    this.move = -350 * this.num;
  };
  left(){
    this.num--;
    if(this.num <0){
      this.num = this.caseArr.length/3 - 1;
    }
    this.move = -350 * this.num;
  }

  //banner
  getBanner(){
    let url = port.BASE_URL+name.users_banner;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail;
      this.bannerArr = data;
      this._isSpinning = false;
    })
  }
  toChange(item){
    this.router.navigate([item.routers]);
  }
  //服务范围
  getService(){
    let url = port.BASE_URL+name.service_findInf;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail;
      this.serviceArr = data.slice(0,4);
    })
  }
  //成功案例
  getCase(){
    let url = port.BASE_URL+name.case_findInfs;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail;
      this.caseArr = data;
      if(this.caseArr.length < 3){
      }
    })
  }
  //新闻资讯
  getNews(){
    let url = port.BASE_URL+name.news_findInfs;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail;
      //console.log(JSON.stringify(data))
      this.newsArr = data.slice(0,4);

    })
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.getBanner();
    this.getService();
    this.getCase();
    this.getNews();
  }
}
