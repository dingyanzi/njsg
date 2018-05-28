import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';
@Component({
  selector: 'join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit{
  _isSpinning:boolean = true;
  joinArr:Array<any> = [];
  joinimgaArr:Array<any> = [];
  joinimgbArr:Array<any> = [];
  joinimgcArr:Array<any> = [];
  jobArr:Array<any> = [];
  imgNull:Array<any> = [{path:'./assets/images/404.jpg'}];
  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
  }
  ifactive(item){
    return item == 0;
  }

  //加入我们
  getJoin(){
    let url = port.BASE_URL+name.join_findInf;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail[0];
      //console.log(JSON.stringify(data));
      this.joinArr = data;
      this.jobArr = data.join;
      this._isSpinning = false;
      if(data.fileList[0]){
        this.joinimgaArr  = data.fileList[0];
      }else{
        this.joinimgaArr = this.imgNull[0]
      }
      if(data.fileList[1]){
        this.joinimgbArr  = data.fileList[1];
      }else{
        this.joinimgbArr = this.imgNull[0]
      }
      if(data.fileList[2]){
        this.joinimgcArr  = data.fileList[2];
      }else{
        this.joinimgcArr = this.imgNull[0]
      }
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getJoin();
  }
}
