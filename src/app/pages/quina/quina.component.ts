import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quina',
  templateUrl: './quina.component.html',
  styleUrls: ['./quina.component.css']
})
export class QuinaComponent implements OnInit {
  gerador : Array<number> = [];
  count = 0;
  subtitle = false;

  constructor() { }


  ngOnInit(): void {
    
}

quinaGenerator() {
  this.gerador = [];
  for (var i = 0; i < 5; i++) {
    var number = Math.floor(Math.random() * 80 + 1);
    while(this.gerador.includes(number)){
      number = Math.floor(Math.random() * 80 + 1);
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
