import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photogram',
  templateUrl: './photogram.component.html',
  styleUrls: ['./photogram.component.css']
})
export class PhotogramComponent implements OnInit {

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
