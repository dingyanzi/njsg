import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {NzMessageService} from 'ng-zorro-antd';
import { port,name,sessionKey } from '../public/portName';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit{
  _isSpinning:boolean = true;
  newsArr:Array<any> = [ ];
  //分页
  pageindex:number = 1;
  nztotal:number;

  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {

  }

  //新闻案例
  getNews(){
    let key = {
      page:this.pageindex
    };
    let url = port.BASE_URL+name.news_findInfs;
    this.httpServer.post(url,key).subscribe(res=> {
      let data = (res as any).detail;
      let total = (res as any).total;
      this.nztotal = total;
      this.newsArr = data;
      this._isSpinning = false;
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getNews()
  }
}
