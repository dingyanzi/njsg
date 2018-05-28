import { Component,OnInit } from '@angular/core';
import { Router,RouterLink} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';

@Component({
  selector: 'case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})
export class CaseComponent implements OnInit{
  _isSpinning:boolean = true;
  caseArr:Array<any> = [];
  //分页
  pageindex:number = 1;
  nztotal:number;

  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
  }

  getCase(){
    let key = {
      page:this.pageindex
    };
    let url = port.BASE_URL+name.case_findInfs;
    this.httpServer.post(url,key).subscribe(res=> {
      let data = (res as any).detail;
      let total = (res as any).total;
      this.nztotal = total;
      this.caseArr = data;
      this._isSpinning = false;
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCase()

  }



}
