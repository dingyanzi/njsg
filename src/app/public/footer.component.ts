import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MapOptions } from 'angular2-baidu-map';
import { port,name,sessionKey } from '../public/portName';
@Component({
  selector: 'footer',
  template: `
 <div class="bottomBox">
			<div class="mainBox clearfix">
				<div class="botfu">
					<span class="botit"><i class="iconfont icon-fuwu"></i>服务范围</span>
					<p>品牌官网建设</p>
					<p>平台系统开发</p>
					<p>APP（安卓和苹果）系统开发</p>
					<p>无人机航拍、监控...</p>
					<p>其他</p>
				</div>
				<div class="botcon">
					<span class="botit"><i class="iconfont icon-dianhua"></i>联系我们</span>
					<nz-tooltip [nzTitle]="aboutArr['address']">
					  <p nz-tooltip>地址：{{aboutArr['address']}}</p>
					</nz-tooltip>
					<p>电话：{{aboutArr['contact']}}</p>
					<div class="map">
					  <baidu-map [options]="optss">
					      <marker *ngFor="let marker of markera" [point]="marker.point" [options]="marker.options" ></marker>
					  </baidu-map>
					</div>
				</div>
				<div class="botrt">
					<span class="botit"><i class="iconfont icon-weixin"></i>微信公众号</span>
					<img src="./assets/images/contact_weixin.jpg">
					<div class="qq">
						<a href="tencent://message/?uin=609129392&Site=&menu=yes"><i class="iconfont icon-qq"></i>业务咨询</a>
					</div>
				</div>
			</div>
		</div>
		<div class="copyright">
			<div class="mainBox clearfix">
				<p>@2015-2016 版权所有 松果科技 ICP备12071364号</p>
				<img src="./assets/images/logo2.jpg">
			</div>
		</div>
  `,
  styles: [`
 .bottomBox {
	background: #f6f6f6;
	padding: 40px 0;
}

.bottomBox .botfu,
.bottomBox .botcon,
.bottomBox .botrt {
	float: left;
	width: 334px;
	overflow: hidden;
}

.bottomBox .botrt {
	width: 240px;
}

.bottomBox .botcon {
	margin: 0 146px;
}

.bottomBox .botrt .botit {
	width: 240px;
}

.bottomBox .botit {
	display: block;
	width: 320px;
	font-size: 16px;
	color: #282828;
	padding-bottom: 10px;
	border-bottom: 1px solid #e3e3e3;
	margin-bottom: 10px;
}

.bottomBox .botit i {
	margin-right: 10px;
	color: #282828;
}

.bottomBox div p {
	font-size: 16px;
	color: #616161;
	padding-bottom: 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.bottomBox .botrt img {
	width: 105px;
	margin: 0 0 10px 10px;
}

.bottomBox .botrt .qq {
	border-top: 1px solid #e3e3e3;
}

.bottomBox .botrt .qq a {
	font-size: 14px;
	margin: 10px 0 0px 10px;
	display: block;
	border: 1px solid #e3e3e3;
	width: 118px;
	text-align: center;
	color: #666;
	padding: 7px 0px;
}

.bottomBox .map {
	width: 332px;
	height: 100px;
	border: 1px solid #e3e3e3;
	overflow: hidden;
}

.copyright {
	color: #c3c3c3;
	background: #222222;
	padding: 30px 0;
}

.copyright p {
	float: left;
	font-size: 14px;
	color: #c3c3c3;
}

.copyright img {
	float: right;
}

`],

})
export class footerComponent implements OnInit{
  aboutArr:Array<any>  = [];
  public optss: MapOptions;
  public markera: Array<{ point; options? }>;
  constructor(
    public httpServer:HttpClient
   ) {
    this.optss = {
      centerAndZoom: {
        lat: 32.1563806922,
        lng: 118.7476983004,
        zoom: 15
      }
    };
    this.markera = [
      {
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



  ngOnInit() {
    let url = port.BASE_URL+name.about_findInf;
    this.httpServer.post(url,'').subscribe(res=> {
      let data = (res as any).detail[0];
      this.aboutArr = data;
    })

  }

}
