import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.css']
})
export class LotofacilComponent implements OnInit {
  gerador : Array<number> = [];
  count = 0;
  subtitle = false;

  constructor() { }


  ngOnInit(): void {
    
}

lotofacilGenerator() {
  this.gerador = [];
  for (var i = 0; i < 15; i++) {
    var number = Math.floor(Math.random() * 25 + 1);
    while(this.gerador.includes(number)){
      number = Math.floor(Math.random() * 25 + 1);
    }
    this.gerador.push(number);
  }
  this.gerador.sort((a, b) => a-b);
  this.counter();
  this.subtitle = true;
} 

counter(){
  let interval = setInterval(() => {
    this.count++;
    if(this.count === 6){
      this.count = 0
    }
  }, 1000)
}
}
