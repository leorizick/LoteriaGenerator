import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.component.html',
  styleUrls: ['./mega-sena.component.css']
})
export class MegaSenaComponent implements OnInit {
  gerador : Array<number> = [];
  count = 0;
  subtitle = false;

  constructor() { }


  ngOnInit(): void {
    
}

megaSenaGenerator() {
  this.gerador = [];
  for (var i = 0; i < 6; i++) {
    var number = Math.floor(Math.random() * 60 + 1);
    while(this.gerador.includes(number)){
      number = Math.floor(Math.random() * 60 + 1);
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

