import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';

@Component({
  selector: 'uav',
  templateUrl: './uav.component.html',
  styleUrls: ['./uav.component.css','../public/css/animate.min.css'],
})
export class UavComponent implements OnInit{
  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
