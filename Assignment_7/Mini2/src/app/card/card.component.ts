import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  d = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.d = this.data.d;
  }

}
