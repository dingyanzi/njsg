import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class layoutComponent implements OnInit {
  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
  }

  ngOnInit() {

  }



}
