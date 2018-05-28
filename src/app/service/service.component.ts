import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';
@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],

})
export class ServiceComponent implements OnInit{
  _isSpinning:boolean = true;
  open:string;
  close:string;
  shows:boolean;
  yes:boolean=true;
  serviceArr:Array<any>  = [];

  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
  }

  openFn(){
    this.shows = true;
    this.yes = false
  }
  closeFn(){
    this.shows = false;
    this.yes = true
  }

  getService(){
    let url = port.BASE_URL+name.service_findInf;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail;
      //console.log(JSON.stringify(data))
      this.serviceArr = data;
      this._isSpinning = false;
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getService();
  }

}
