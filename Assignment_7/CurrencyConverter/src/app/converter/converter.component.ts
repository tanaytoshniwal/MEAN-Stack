import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  tags = ["USD","AUD","BRL","CAD","CHF","CNY","CZK","DKK","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","ZAR","EUR"];
  one;
  two;
  oneone;
  twotwo;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  get(){
    this.http.get('https://exchangeratesapi.io/api/latest?base='+this.one).subscribe(
      (data:any)=>{
        console.log(data);
        this.twotwo = this.oneone * data.rates[this.two];
      }
    );
  }
}
