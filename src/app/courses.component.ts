import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{title}}</h2> 
    <h2 [textContent]="title"></h2>

    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <button class="btn btn-primary" (click)="onClick()">Save</button>
    <input [(ngModel)]="email" (keyup.enter)="onClick()" />
    {{text | summary:10}} 
  `
})
export class CoursesComponent {
  title = "List of courses"
  imageUrl = "https://picsum.photos/200/300"
  email = "me@example.com"
  text = 'SCI là một tổ chức phi lợi nhuận nhằm cung cấp thông tin và kết nối các tổ chức giúp đỡ, hỗ trợ bệnh nhân ung thư Việt Nam. Các hoạt động của SCI nhằm mục đích cung cấp thông tin chính xác và kiến thức bổ ích cho bệnh nhân ung thư và người thân của bệnh nhân ung thư, đồng thời, tạo ra những hoạt động cộng đồng mang tính trải nghiệm, giúp các bệnh nhân chiến đấu '
  courses;
  onClick() {
    console.log(this.email);
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}