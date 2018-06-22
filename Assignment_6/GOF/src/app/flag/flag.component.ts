import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  scoreboard = [];
  options = ['a', 'b'];
  ans = '';
  data;
  randName;
  res;
  score = 0;
  total = 0;
  value = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.next();this.total = 0;

  }

  store(o){
    this.res = o;
  }

  genOptions(randIndex){
    this.ans = this.data[randIndex].name;
    let i1 = [Math.floor(Math.random()*this.data.length*1/3), Math.floor(Math.random()*this.data.length*2/3), Math.floor(Math.random()*this.data.length*3/3)];
    let i = Math.floor(Math.random()*4);
    let j=0;
    for(let l = 0; l < 4; l++){
      if(i == l)
        this.options.push(this.ans);
      else  
        this.options.push(this.data[i1[j++]].name);
    }
    console.log(this.options);
  }

  print(){
    if(this.total!==0)
      this.scoreboard.push({score: this.score, total: this.total});
    this.score = 0;
    this.total = 0;
  }

  next(){
    if(this.res == this.ans) {
      this.score++;
      this.value=true;
    }
    else this.value = false;
    this.total++;
    this.options = [];
    this.data = this.dataService.get();
    let randIndex = Math.floor(Math.random()*this.data.length);
    console.log(randIndex);
    this.genOptions(randIndex);
    this.randName = this.data[randIndex]["alpha-2"].toLowerCase();
  }

}
