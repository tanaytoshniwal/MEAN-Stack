import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  num = 0;
  
  inc(){
    this.http.post('http://localhost:8080/increment', {}).subscribe(
      (data)=>{
        this.num = <number> data;
      });
  }

  reset(){
    this.http.post('http://localhost:8080/reset', {}).subscribe(
      (data)=>{
        this.num = <number> data;
      });
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.post('http://localhost:8080/read', {}).subscribe(
      (data)=>{
        this.num = <number> data;
      });
  }

}
