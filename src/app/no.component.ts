import { Component } from '@angular/core';
import { port,name,sessionKey } from './public/portName';

@Component({
  selector: 'no-detail',
  template: `
  <div class="found">
    <img [src]="picurl+'404.jpg'">
      <p style=" font-size:18px;color: #383838">您访问的页面丢失啦！
      <a routerLink="/layout" style=" color:#dc5800;">点击首页</a>返回
    </p>
  </div>`,
  styles:[`
    .found{
      margin-top:50px;
      text-align:center;
    };
  `]
})
export class NothingComponent {
  picurl = port.PIC_URL;
}
