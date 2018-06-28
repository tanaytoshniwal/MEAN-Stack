import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
 
  d = [];
  name;
  caption;
  user;
  photo;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.d = this.data.d;
  }

  upload(){
    this.d.unshift({photo: this.photo, name: this.name, caption: this.caption});
  }
}
