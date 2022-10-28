import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.component.html',
  styleUrls: ['./mega-sena.component.css']
})
export class MegaSenaComponent implements OnInit {
  gerador : Array<number> = [];

  constructor() { }


  ngOnInit(): void {
    this.megaSenaGenerator();
}

megaSenaGenerator() {
  for (var i = 0; i < 6; i++) {
    var number = Math.floor(Math.random() * 60 + 1);
    while(this.gerador.includes(number)){
      number = Math.floor(Math.random() * 60 + 1);
    }
    this.gerador.push(number);
    console.log(this.gerador[i])
  }
}

}

