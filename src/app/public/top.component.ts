import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { port,name,sessionKey } from '../public/portName';

@Component({
  selector: 'nav-top',
  template: `
  <header class="head">
  <div class="mainBox clearfix">
    <div class="logo">
      <a routerLink="/layout/home"><img src="./assets/images/logo.png"></a>
    </div>
    <div class="navbar">
      <ul class="nav clearfix">
        <li routerLinkActive="home">
          <i class="iconfont icon-home"></i>
          <a routerLink="home" >首页</a>
        </li>
        <li routerLinkActive="home">
          <a routerLink="about">关于我们</a>
          <i>/</i>
        </li>
        <li routerLinkActive="home">
          <a routerLink="service">服务范围</a>
          <i>/</i>
        </li>
        <li routerLinkActive="home">
          <a routerLink="news">新闻资讯</a>
          <i>/</i>
        </li>
        <li routerLinkActive="home">
          <a routerLink="case">成功案例 </a>
          <i>/</i>
        </li>
        <li routerLinkActive="home">
          <a routerLink="join">加入我们</a>
          <i>/</i>
        </li>
        <li routerLinkActive="home">
          <a routerLink="/uav">无人机</a>
        </li>
      </ul>
    </div>
  </div>
</header>
  `,
  styles: [`
  .head {
  width: 100%;
  height: 130px;
  background: #fff;
}

.head .logo {
  float: left;
  margin-top: 50px;
}

.head .navbar {
  float: right;
}

.head .navbar .nav {
  margin-top: 55px;
}

.head .navbar .nav li {
  float: left;
  margin: 0 10px;
}

.head .navbar .nav li a {
  font-size: 18px;
  color: #474747;
}

.head .navbar .nav li i {
  font-style: normal;
  display: inline-block;
  margin-left: 10px;
}

.head .navbar .nav li.home a,
.head .navbar .nav li:hover a,
.head .navbar .nav li:first-child.home i{
  color: #d30000;
}
`],

})
export class topComponent {


}
