import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MapOptions,ControlAnchor,NavigationControlType,MapTypeControlType,NavigationControlOptions,OverviewMapControlOptions,ScaleControlOptions,MapTypeControlOptions} from 'angular2-baidu-map';
import { port,name,sessionKey } from '../public/portName';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements OnInit{
  _isSpinning:boolean = true;
  aboutArr:Array<any>  = [];
  aboutImg:Array<any>  = [];
  aboutImga:Array<any>  = [];
  aboutImgb:Array<any>  = [];
  aboutImgc:Array<any>  = [];
  aboutImgd:Array<any>  = [];
  aboutImge:Array<any>  = [];
  imgNull:Array<any> = [{path:'./assets/images/404.jpg'}];
  public opts: MapOptions;
  public markers: Array<{ point; options? }>;
  public controlOpts: NavigationControlOptions;
  public overviewmapOpts: OverviewMapControlOptions;
  public scaleOpts: ScaleControlOptions;
  public mapTypeOpts: MapTypeControlOptions;

  constructor(
    public httpServer:HttpClient,
    public router:Router
  ) {
    this.opts = {
      centerAndZoom: {
        lat: 32.1563806922,
        lng: 118.7476983004,
        zoom: 16
      }
    }
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    }

    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: true
    }

    this.scaleOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    }

    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
    }
    this.markers = [
      {
        options: {
          icon: {
            imageUrl: '/assets/images/markericon.png',
            size: {
              height: 60,
              width: 50
            }
          }
        },
        point: {
          lat: 32.1563806922,
          lng: 118.7476983004,
        }
      },
      {
        point: {
          lat: 32.1563806922,
          lng: 118.7476983004,
        }
      }
    ]
  }

  public showWindow({ e, marker, map }: any): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：南京市浦口区沿江街道南浦路318号', {
        offset: new window.BMap.Size(0, -30),
        title: '松果科技有限公司'
      }),
      marker.getPosition()
    )

  }

  //关于我们
  getAbout(){
    let url = port.BASE_URL+name.about_findInf;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail[0];
      //console.log(JSON.stringify(data))
      this.aboutArr = data;
      if(data.fileList[0]){
        this.aboutImg  = data.fileList[0];
      }else{
        this.aboutImg = this.imgNull[0]
      }
      if(data.fileList[1]){
        this.aboutImga  = data.fileList[1];
      }else{
        this.aboutImga = this.imgNull[0]
      }
      if(data.fileList[2]){
        this.aboutImgb  = data.fileList[2];
      }else{
        this.aboutImgb = this.imgNull[0]
      }
      if(data.fileList[3]){
        this.aboutImgc  = data.fileList[3];
      }else{
        this.aboutImgc = this.imgNull[0]
      }
      if(data.fileList[4]){
        this.aboutImgd  = data.fileList[4];
      }else{
        this.aboutImgd = this.imgNull[0]
      }
      if(data.fileList[5]){
        this.aboutImge  = data.fileList[5];
      }else{
        this.aboutImge = this.imgNull[0]
      }
      this._isSpinning = false;
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getAbout();
  }




}
