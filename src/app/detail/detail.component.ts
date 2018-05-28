import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit{
  _isSpinning:boolean = true;
  id:string = "";
  @Input() ifs:string;
  newsDetail:Object = {};
  caseDetail:Object = {};
  titles:string;
  column:string;
  constructor(
    public httpServer:HttpClient,
    private route: ActivatedRoute
  ) {

  }

  //新闻资讯详情接口
  getnewsDetail(){
    let data = {
      id:this.id
    };
    let url = port.BASE_URL+name.news_findEditor;
    this.httpServer.post(url,data).subscribe(res=> {
      let data = (res as any).detail;
      this.newsDetail = data;
      this._isSpinning = false;
    })
  }

  //成功案例详情接口
  getcaseDetail(){
    let data = {
      id:this.id
    };
    let url = port.BASE_URL+name.case_findEditor;
    this.httpServer.post(url,data).subscribe(res=> {
      let data = (res as any).detail;
      this.caseDetail = data;
      this._isSpinning = false;
    })
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id=data['id'];
      this.ifs=data['ifs'];
    });
    if(this.ifs == '0'){
      this.getnewsDetail();
      this.titles = '新闻资讯'
    }else {
      this.getcaseDetail();
      this.titles = '成功案例'
    }
  }



}
